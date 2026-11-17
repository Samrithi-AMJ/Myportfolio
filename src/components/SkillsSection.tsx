import {
  BrainCircuit,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  languages: Code2,
  frontend: Layout,
  backend: Server,
  databases: Database,
  'ai-ml': BrainCircuit,
  tools: Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-white/[0.07] bg-[#070B14] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Technical Stack
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Verified Engineering Skills
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Technologies extracted directly from public repository dependencies, source codebases,
            and official academic credentials.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            return (
              <article
                key={category.id}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B1120] p-6 transition-colors hover:border-blue-500/30"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-blue-600/10 text-blue-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {category.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/[0.07] pt-4">
                  <p className="font-mono text-xs leading-7 text-slate-200">
                    {category.skills.join(' · ')}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
