import { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  type PortfolioProject,
  type ProjectCategory,
} from '../data/portfolioData';
import type { LiveRepoInfo } from '../hooks/useGitHubProfile';
import { ProjectModal } from './ProjectModal';
import { ProjectVisual } from './ProjectVisual';

type FilterTab = 'All' | ProjectCategory;

const FILTER_TABS: FilterTab[] = [
  'All',
  'Full Stack',
  'Artificial Intelligence',
  'Machine Learning',
  'Backend',
  'Other',
];

interface ProjectsSectionProps {
  repoMap: Record<string, LiveRepoInfo>;
  syncLabel: string;
  loading: boolean;
}

export function ProjectsSection({ repoMap, syncLabel, loading }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterTab>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((project) =>
      project.categories.includes(selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <section id="projects" className="border-b border-white/[0.07] bg-[#0B1120] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Selected Engineering Work
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects &amp; Case Studies
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              Projects verified directly against public GitHub repositories, dependency manifests,
              README documentation, and official hackathon submissions.
            </p>
          </div>

          <p className="font-mono text-xs text-slate-400">
            {loading ? 'Checking GitHub API...' : syncLabel}
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#070B14] p-1.5 w-fit max-w-full overflow-x-auto"
        >
          {FILTER_TABS.map((tab) => {
            const isSelected = selectedCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(tab)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-100'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#070B14] p-10 text-center text-sm text-slate-400">
            No projects match the selected category.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              const liveRepo = project.repoName ? repoMap[project.repoName] : undefined;
              const liveUrl = project.liveDemoUrl || (liveRepo?.homepage ? liveRepo.homepage : undefined);

              return (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070B14] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/35"
                >
                  <ProjectVisual project={project} />

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        <span className="text-blue-300">{project.ownership}</span>
                        <span aria-hidden="true" className="mx-2 text-slate-600">·</span>
                        <span>{project.categories[0]}</span>
                      </p>

                      <h3 className="mt-2 font-display text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-slate-300">
                        {project.subtitle}
                      </p>

                      {project.badgeNote && (
                        <p className="mt-2.5 text-xs font-medium text-violet-300">
                          {project.badgeNote}
                        </p>
                      )}

                      <p className="mt-3 text-sm leading-relaxed text-slate-400">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6">
                      <p className="border-t border-white/[0.07] pt-4 font-mono text-[11px] leading-6 text-slate-300">
                        {project.techStack.slice(0, 6).join(' · ')}
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300 whitespace-nowrap shrink-0"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>

                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} GitHub repository`}
                              className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                            >
                              <Github className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>Code</span>
                            </a>
                          )}
                          {liveUrl && (
                            <a
                              href={liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} live deployment`}
                              className="inline-flex items-center gap-1 text-xs font-medium text-violet-300 transition-colors hover:text-violet-200"
                            >
                              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <ProjectModal
        project={activeProject}
        liveRepo={activeProject?.repoName ? repoMap[activeProject.repoName] : undefined}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
