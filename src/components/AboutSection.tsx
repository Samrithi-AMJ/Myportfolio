import { ExternalLink, GitBranch, Github, Linkedin } from 'lucide-react';
import { ABOUT_HIGHLIGHTS, PORTFOLIO_PROFILE } from '../data/portfolioData';

interface AboutSectionProps {
  publicReposCount: number;
  contributionsLastYear: number;
}

export function AboutSection({ publicReposCount, contributionsLastYear }: AboutSectionProps) {
  return (
    <section id="about" className="border-b border-white/[0.07] bg-[#0B1120] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              About Me
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineering Practical Software &amp; Grounded AI Systems
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {PORTFOLIO_PROFILE.bio}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Across 13 public GitHub repositories and competitive hackathon builds, my work spans
              multilingual agricultural and healthcare platforms built with React, TypeScript,
              FastAPI, and Supabase PostgreSQL, alongside Java Spring Boot civic backends,
              scikit-learn analytics pipelines, and LoRA-tuned LLM workflows.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.08] bg-[#070B14] p-5"
                >
                  <h3 className="font-display text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.08] bg-[#070B14] p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold text-white">
                Coding &amp; Developer Profiles
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                Official public links and verified GitHub repository activity.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={PORTFOLIO_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0B1120] p-4 transition-colors hover:border-blue-500/35"
                >
                  <div className="flex items-start gap-3">
                    <Github className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-white">GitHub</p>
                      <p className="mt-0.5 font-mono text-xs text-blue-300">
                        github.com/{PORTFOLIO_PROFILE.githubUsername}
                      </p>
                      <p className="mt-2 font-mono text-xs text-slate-400 tabular-nums">
                        {publicReposCount} public repos · {contributionsLastYear} contributions (last
                        year)
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                </a>

                <a
                  href={PORTFOLIO_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0B1120] p-4 transition-colors hover:border-blue-500/35"
                >
                  <div className="flex items-start gap-3">
                    <Linkedin className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-white">LinkedIn</p>
                      <p className="mt-0.5 font-mono text-xs text-blue-300">
                        in/samrithi-amj-599080381
                      </p>
                      <p className="mt-2 text-xs text-slate-400">
                        Verified profile link for academic &amp; hackathon networking
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                </a>

                <div className="rounded-xl border border-white/[0.07] bg-[#0B1120]/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <GitBranch className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
                    <span>Primary GitHub Languages</span>
                  </div>
                  <p className="mt-2 font-mono text-xs leading-6 text-slate-400">
                    {PORTFOLIO_PROFILE.githubSnapshotStats.primaryLanguages.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
