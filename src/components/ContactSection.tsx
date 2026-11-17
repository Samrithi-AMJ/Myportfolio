import { useState, type FormEvent } from 'react';
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback ignored if clipboard unavailable
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = (await res.json()) as { error?: string; message?: string; id?: string };
      if (!res.ok) {
        setErrorMsg(data.error || 'Could not submit inquiry. Please try emailing directly.');
      } else {
        setSuccessMsg(
          `Thank you, ${name.trim()}. Your message has been recorded on the portfolio server (Ref: ${data.id || 'saved'}).`,
        );
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch {
      setErrorMsg(
        'Network error reaching the server. Please use the direct email link alongside this form.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#070B14] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Get in Touch
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Connect for Internships &amp; Collaborations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Open to software engineering internships, AI/ML research collaborations, and
              hackathon teams. Reach out directly through any verified channel below.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-[#0B1120] p-4">
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  className="flex min-w-0 items-center gap-3 text-sm text-slate-200 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                  <span className="truncate">{PORTFOLIO_PROFILE.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${PORTFOLIO_PROFILE.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0B1120] p-4 text-sm text-slate-200 transition-colors hover:border-blue-500/30 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span className="font-mono tabular-nums">{PORTFOLIO_PROFILE.phone}</span>
              </a>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={PORTFOLIO_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0B1120] p-4 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/30 hover:text-white"
                >
                  <Github className="h-4 w-4 shrink-0 text-slate-300" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0B1120] p-4 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/30 hover:text-white"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-[#0B1120] p-6 sm:p-8"
              noValidate
            >
              <h3 className="font-display text-xl font-bold text-white">Send a Message</h3>
              <p className="mt-1 text-xs text-slate-400">
                Submissions are validated and stored directly on the portfolio backend.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Recruiter or collaborator name"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#070B14] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#070B14] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Software Engineering Internship / Project Inquiry"
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#070B14] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share role details, timeline, or collaboration scope..."
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#070B14] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs text-rose-200"
                >
                  {errorMsg}
                </div>
              )}

              {successMsg && (
                <div
                  role="status"
                  className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200"
                >
                  {successMsg}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>

                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}?subject=${encodeURIComponent(
                    subject || 'Portfolio Inquiry',
                  )}`}
                  className="text-xs font-medium text-slate-400 transition-colors hover:text-blue-300"
                >
                  Or open in default email client
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
