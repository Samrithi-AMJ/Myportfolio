import { Award, BadgeCheck, Code, GraduationCap, Trophy } from 'lucide-react';
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  CODING_PRACTICE_METRICS,
  EDUCATION_TIMELINE,
} from '../data/portfolioData';

export function AchievementsAndEducation() {
  return (
    <>
      <section id="achievements" className="border-b border-white/[0.07] bg-[#070B14] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Recognition &amp; Credentials
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Achievements &amp; Certifications
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              Hackathon awards, academic distinction, verified certifications, and problem-solving
              practice documented in my official resume.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ACHIEVEMENTS.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B1120] p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-violet-600/10 text-violet-300">
                      {item.type === 'Hackathon' ? (
                        <Trophy className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Award className="h-5 w-5" aria-hidden="true" />
                      )}
                    </div>
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-blue-300">{item.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>

                <p className="mt-5 border-t border-white/[0.07] pt-3 text-xs text-slate-500">
                  {item.type} Distinction · Verified in Official Resume
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="font-display text-xl font-bold text-white">
                Verified Certifications
              </h3>
              <div className="mt-5 divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1120]">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <BadgeCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">{cert.title}</p>
                        <p className="mt-0.5 text-xs text-slate-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-400 tabular-nums shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-display text-xl font-bold text-white">
                Problem-Solving Practice
              </h3>
              <div className="mt-5 space-y-4">
                {CODING_PRACTICE_METRICS.map((item) => (
                  <div
                    key={item.platform}
                    className="rounded-2xl border border-white/[0.08] bg-[#0B1120] p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <Code className="h-4 w-4 text-blue-400" aria-hidden="true" />
                        <span className="font-display text-sm font-bold text-white">
                          {item.platform}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-blue-300 tabular-nums">
                        {item.metric}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">{item.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="border-b border-white/[0.07] bg-[#0B1120] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Academic Background
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Education Timeline
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              Verified academic progression from secondary schooling through undergraduate Computer
              Science &amp; Engineering.
            </p>
          </div>

          <div className="relative mt-12 space-y-6 pl-8 before:absolute before:inset-y-2 before:left-3 before:w-px before:bg-gradient-to-b before:from-blue-500/70 before:via-violet-500/40 before:to-transparent">
            {EDUCATION_TIMELINE.map((edu) => (
              <article
                key={edu.id}
                className="relative rounded-2xl border border-white/[0.08] bg-[#070B14] p-6 sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[26px] top-7 flex h-4 w-4 items-center justify-center rounded-full border border-blue-400/60 bg-[#070B14]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>

                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="h-5 w-5 text-blue-400 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-lg font-bold text-white">
                      {edu.institution}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-medium text-slate-400 tabular-nums">
                    {edu.period}
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-blue-300">
                  {edu.qualification}
                  <span aria-hidden="true" className="mx-2 text-slate-600">·</span>
                  <span className="font-mono text-slate-200 tabular-nums">{edu.score}</span>
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">{edu.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
