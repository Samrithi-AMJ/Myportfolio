import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AboutSection } from './components/AboutSection';
import { AchievementsAndEducation } from './components/AchievementsAndEducation';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import { SkillsSection } from './components/SkillsSection';
import { PORTFOLIO_PROFILE } from './data/portfolioData';
import { useGitHubProfile } from './hooks/useGitHubProfile';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const github = useGitHubProfile();

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100">
      <Navbar />

      <main>
        <HeroSection
          publicReposCount={github.publicReposCount}
          onOpenResume={() => setResumeOpen(true)}
        />

        <AboutSection
          publicReposCount={github.publicReposCount}
          contributionsLastYear={github.contributionsLastYear}
        />

        <SkillsSection />

        <ProjectsSection
          repoMap={github.repoMap}
          syncLabel={github.lastSyncedLabel}
          loading={github.loading}
        />

        <AchievementsAndEducation />

        <ContactSection />
      </main>

      <footer className="border-t border-white/[0.08] bg-[#060911] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-display text-sm font-semibold text-white">
              {PORTFOLIO_PROFILE.name}
            </p>
            <p className="mt-0.5 text-xs text-slate-400">
              {PORTFOLIO_PROFILE.institution} · {PORTFOLIO_PROFILE.degreeSummary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <a
              href={PORTFOLIO_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_PROFILE.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Email</span>
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="text-blue-400 transition-colors hover:text-blue-300"
            >
              View Resume PDF
            </button>
          </div>
        </div>
      </footer>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
