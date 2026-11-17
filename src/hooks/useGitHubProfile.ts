import { useEffect, useState } from 'react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export interface LiveRepoInfo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
}

export interface GitHubLiveState {
  loading: boolean;
  publicReposCount: number;
  contributionsLastYear: number;
  repoMap: Record<string, LiveRepoInfo>;
  lastSyncedLabel: string;
}

const CACHE_KEY = 'samrithi_portfolio_gh_v1';
const CACHE_TTL_MS = 30 * 60 * 1000;

export function useGitHubProfile(): GitHubLiveState {
  const [state, setState] = useState<GitHubLiveState>({
    loading: true,
    publicReposCount: PORTFOLIO_PROFILE.githubSnapshotStats.publicRepos,
    contributionsLastYear: PORTFOLIO_PROFILE.githubSnapshotStats.contributionsLastYear,
    repoMap: {},
    lastSyncedLabel: 'Verified profile snapshot',
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw) as {
            timestamp: number;
            publicReposCount: number;
            repoMap: Record<string, LiveRepoInfo>;
          };
          if (Date.now() - cached.timestamp < CACHE_TTL_MS && Object.keys(cached.repoMap).length > 0) {
            if (!cancelled) {
              setState({
                loading: false,
                publicReposCount: cached.publicReposCount,
                contributionsLastYear: PORTFOLIO_PROFILE.githubSnapshotStats.contributionsLastYear,
                repoMap: cached.repoMap,
                lastSyncedLabel: 'Live GitHub REST API (cached)',
              });
            }
            return;
          }
        }
      } catch {
        // Ignore corrupted localStorage cache
      }

      try {
        const res = await fetch('/api/github/profile');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const payload = (await res.json()) as {
          rateLimited?: boolean;
          user?: { public_repos?: number } | null;
          repos?: LiveRepoInfo[];
        };

        const repoMap: Record<string, LiveRepoInfo> = {};
        if (Array.isArray(payload.repos)) {
          for (const repo of payload.repos) {
            if (repo && typeof repo.name === 'string') {
              repoMap[repo.name] = repo;
            }
          }
        }

        const publicReposCount =
          typeof payload.user?.public_repos === 'number' && payload.user.public_repos > 0
            ? payload.user.public_repos
            : PORTFOLIO_PROFILE.githubSnapshotStats.publicRepos;

        if (Object.keys(repoMap).length > 0) {
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                timestamp: Date.now(),
                publicReposCount,
                repoMap,
              }),
            );
          } catch {
            // Ignore storage quota errors
          }
        }

        if (!cancelled) {
          setState({
            loading: false,
            publicReposCount,
            contributionsLastYear: PORTFOLIO_PROFILE.githubSnapshotStats.contributionsLastYear,
            repoMap,
            lastSyncedLabel:
              Object.keys(repoMap).length > 0
                ? 'Synced with GitHub REST API'
                : 'Verified GitHub snapshot',
          });
        }
      } catch {
        if (!cancelled) {
          setState((prev) => ({
            ...prev,
            loading: false,
            lastSyncedLabel: 'Verified GitHub snapshot',
          }));
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
