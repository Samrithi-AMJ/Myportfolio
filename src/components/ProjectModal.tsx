import { useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolioData';
import type { LiveRepoInfo } from '../hooks/useGitHubProfile';

interface ProjectModalProps {
  project: PortfolioProject | null;
  liveRepo?: LiveRepoInfo;
  onClose: () => void;
}

export function ProjectModal({ project, liveRepo, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const liveUrl = project.liveDemoUrl || (liveRepo?.homepage ? liveRepo.homepage : undefined);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B1120] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <p className="text-xs font-medium text-blue-300">
              {project.ownership}
              <span aria-hidden="true" className="mx-2 text-slate-600">·</span>
              <span className="text-slate-400">{project.categories.join(' / ')}</span>
            </p>
            <h3 id="project-modal-title" className="mt-1.5 text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-300">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-300">
          {project.badgeNote && (
            <div className="rounded-xl border border-violet-500/25 bg-violet-500/10 px-4 py-3 text-violet-200">
              {project.badgeNote}
            </div>
          )}

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
              Problem Statement
            </h4>
            <p className="mt-2 text-slate-200">{project.problemStatement}</p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Features &amp; Architecture
            </h4>
            <ul className="mt-2.5 space-y-2">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
              Verified Contribution
            </h4>
            <p className="mt-2 text-slate-200">{project.contribution}</p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technology Stack
            </h4>
            <p className="mt-2 font-mono text-xs leading-6 text-blue-200">
              {project.techStack.join(' · ')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5 text-xs text-slate-400">
            <span>Source: {project.sourceLabel}</span>
            {liveRepo?.pushed_at && (
              <span className="font-mono tabular-nums">
                Last pushed: {new Date(liveRepo.pushed_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>View on GitHub</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span>Open Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
