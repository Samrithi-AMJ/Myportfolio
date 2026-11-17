import { useEffect } from 'react';
import { Download, ExternalLink, X } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] px-6 py-4">
          <div>
            <h3 id="resume-modal-title" className="text-lg font-bold text-white">
              Samrithi AMJ — Official Resume
            </h3>
            <p className="text-xs text-slate-400">Uploaded PDF document</p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={PORTFOLIO_PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Open Tab</span>
            </a>
            <a
              href={PORTFOLIO_PROFILE.resumeUrl}
              download={PORTFOLIO_PROFILE.resumeFileName}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-950">
          <iframe
            src={PORTFOLIO_PROFILE.resumeUrl}
            title="Samrithi AMJ Resume PDF"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
