import { ArrowRight, Download, FileText, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  publicReposCount: number;
  onOpenResume: () => void;
}

export function HeroSection({ publicReposCount, onOpenResume }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/[0.07] bg-[#070B14]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[520px] rounded-full bg-gradient-to-br from-blue-600/15 via-violet-600/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-sm font-medium text-blue-300">
              {PORTFOLIO_PROFILE.degreeSummary}
              <span aria-hidden="true" className="mx-2 text-slate-600">·</span>
              <span className="text-slate-300">{PORTFOLIO_PROFILE.institution}</span>
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {PORTFOLIO_PROFILE.name}
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-medium text-slate-200 sm:text-xl">
              {PORTFOLIO_PROFILE.headline}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              {PORTFOLIO_PROFILE.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 whitespace-nowrap shrink-0"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PORTFOLIO_PROFILE.resumeUrl}
                download={PORTFOLIO_PROFILE.resumeFileName}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/[0.08] whitespace-nowrap shrink-0"
              >
                <Download className="h-4 w-4 text-blue-300" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white whitespace-nowrap shrink-0"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>View PDF</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-sm text-slate-300">
              <a
                href={PORTFOLIO_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span>GitHub / Samrithi-AMJ</span>
              </a>
              <a
                href={PORTFOLIO_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120] p-2 shadow-xl">
              <div className="relative h-full min-h-[344px] w-full overflow-hidden rounded-xl bg-slate-900">
                <img
                  src={PORTFOLIO_PROFILE.photoUrl}
                  alt="Portrait of Samrithi AMJ"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#070B14]/70 via-[#070B14]/20 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-4 sm:gap-6">
          <div className="rounded-xl border border-white/[0.07] bg-[#0B1120] p-4 sm:p-5">
            <p className="font-mono text-2xl font-bold text-white tabular-nums sm:text-3xl">9.33</p>
            <p className="mt-1 text-xs font-medium text-slate-400">B.E. CSE GPA (2nd Semester Topper)</p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-[#0B1120] p-4 sm:p-5">
            <p className="font-mono text-2xl font-bold text-white tabular-nums sm:text-3xl">
              {publicReposCount}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400">Public GitHub Repositories</p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-[#0B1120] p-4 sm:p-5">
            <p className="font-mono text-2xl font-bold text-white tabular-nums sm:text-3xl">2</p>
            <p className="mt-1 text-xs font-medium text-slate-400">Hackathon Awards Won</p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-[#0B1120] p-4 sm:p-5">
            <p className="font-mono text-2xl font-bold text-white tabular-nums sm:text-3xl">5</p>
            <p className="mt-1 text-xs font-medium text-slate-400">Verified Technical Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
