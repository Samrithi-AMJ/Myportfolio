import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === 'production';

type CachedGitHubData = {
  fetchedAt: number;
  source: 'live' | 'cache';
  rateLimited: boolean;
  user: Record<string, unknown> | null;
  repos: Array<Record<string, unknown>>;
};

let githubCache: CachedGitHubData | null = null;
const CACHE_TTL_MS = 30 * 60 * 1000;

async function fetchGitHubSnapshot(): Promise<CachedGitHubData> {
  const now = Date.now();
  if (githubCache && now - githubCache.fetchedAt < CACHE_TTL_MS) {
    return { ...githubCache, source: 'cache' };
  }

  const headers: Record<string, string> = {
    'User-Agent': 'Samrithi-AMJ-Portfolio/1.0',
    Accept: 'application/vnd.github.v3+json',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/Samrithi-AMJ', { headers }),
      fetch('https://api.github.com/users/Samrithi-AMJ/repos?per_page=100&sort=updated', { headers }),
    ]);

    if (userRes.status === 403 || userRes.status === 429 || reposRes.status === 403 || reposRes.status === 429) {
      if (githubCache) {
        return { ...githubCache, source: 'cache', rateLimited: true };
      }
      return {
        fetchedAt: now,
        source: 'cache',
        rateLimited: true,
        user: null,
        repos: [],
      };
    }

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API returned ${userRes.status} / ${reposRes.status}`);
    }

    const user = (await userRes.json()) as Record<string, unknown>;
    const reposRaw = (await reposRes.json()) as Array<Record<string, unknown>>;

    const repos = Array.isArray(reposRaw)
      ? reposRaw.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          topics: Array.isArray(repo.topics) ? repo.topics : [],
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at,
          fork: repo.fork,
        }))
      : [];

    githubCache = {
      fetchedAt: now,
      source: 'live',
      rateLimited: false,
      user: {
        login: user.login,
        name: user.name,
        bio: user.bio,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        html_url: user.html_url,
        avatar_url: user.avatar_url,
      },
      repos,
    };

    return githubCache;
  } catch {
    if (githubCache) {
      return { ...githubCache, source: 'cache', rateLimited: false };
    }
    return {
      fetchedAt: now,
      source: 'cache',
      rateLimited: false,
      user: null,
      repos: [],
    };
  }
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '100kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.get('/api/github/profile', async (_req, res) => {
    const data = await fetchGitHubSnapshot();
    res.json(data);
  });

  app.post('/api/contact', async (req, res) => {
    const body = (req.body ?? {}) as Record<string, unknown>;
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (name.length < 2 || name.length > 120) {
      res.status(400).json({ error: 'Please provide your full name (2–120 characters).' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 160) {
      res.status(400).json({ error: 'Please enter a valid email address.' });
      return;
    }

    if (message.length < 10 || message.length > 3000) {
      res.status(400).json({ error: 'Please write a message between 10 and 3,000 characters.' });
      return;
    }

    const record = {
      id: `inq_${Date.now()}`,
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      receivedAt: new Date().toISOString(),
    };

    try {
      const dataDir = path.join(__dirname, 'data');
      const filePath = path.join(dataDir, 'inquiries.json');
      await fs.mkdir(dataDir, { recursive: true });

      let existing: Array<typeof record> = [];
      try {
        const raw = await fs.readFile(filePath, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          existing = parsed;
        }
      } catch {
        existing = [];
      }

      existing.push(record);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');

      res.status(201).json({
        ok: true,
        id: record.id,
        receivedAt: record.receivedAt,
        message: 'Inquiry recorded on the portfolio server.',
      });
    } catch {
      res.status(500).json({
        error: 'Unable to save inquiry on the server right now. Please email samrithi.amj2025cse@sece.ac.in directly.',
      });
    }
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
