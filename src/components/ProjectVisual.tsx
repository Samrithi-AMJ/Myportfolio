import {
  Activity,
  BarChart3,
  Car,
  CloudRain,
  Cpu,
  HeartHandshake,
  Network,
  Recycle,
  ShieldAlert,
  Sprout,
  Wheat,
} from 'lucide-react';
import type { PortfolioProject } from '../data/portfolioData';

const THEME_CONFIG: Record<
  PortfolioProject['visualTheme'],
  {
    gradient: string;
    accentLine: string;
    icon: typeof Sprout;
    domainLabel: string;
  }
> = {
  agri: {
    gradient: 'from-blue-950/80 via-[#0E172B] to-violet-950/50',
    accentLine: 'from-blue-500/50 to-emerald-400/40',
    icon: Sprout,
    domainLabel: 'Multilingual RAG & Crop Vision',
  },
  care: {
    gradient: 'from-indigo-950/80 via-[#0E172B] to-blue-950/60',
    accentLine: 'from-blue-400/50 to-violet-400/50',
    icon: HeartHandshake,
    domainLabel: 'Healthcare & RLS Architecture',
  },
  trade: {
    gradient: 'from-violet-950/80 via-[#0F172A] to-blue-950/60',
    accentLine: 'from-violet-500/60 to-blue-500/50',
    icon: Cpu,
    domainLabel: 'LoRA Fine-Tuning & Multi-Agent RAG',
  },
  weather: {
    gradient: 'from-slate-900 via-[#0D192E] to-blue-950/70',
    accentLine: 'from-sky-400/50 to-blue-600/50',
    icon: CloudRain,
    domainLabel: 'Spatial Radar & ML Nowcasting',
  },
  waste: {
    gradient: 'from-slate-900 via-[#0E172A] to-indigo-950/60',
    accentLine: 'from-blue-500/50 to-cyan-400/40',
    icon: Recycle,
    domainLabel: 'Spring Boot 3 & MySQL Civic Tracker',
  },
  analytics: {
    gradient: 'from-blue-950/70 via-[#0D1526] to-slate-900',
    accentLine: 'from-blue-500/50 to-violet-500/40',
    icon: BarChart3,
    domainLabel: 'Automated EDA & Insight Engine',
  },
  security: {
    gradient: 'from-slate-950 via-[#11182B] to-violet-950/60',
    accentLine: 'from-violet-500/50 to-blue-500/50',
    icon: ShieldAlert,
    domainLabel: 'DDoS Traffic Analysis & Django',
  },
  ev: {
    gradient: 'from-slate-900 via-[#0D1A2D] to-blue-950/60',
    accentLine: 'from-blue-400/50 to-indigo-500/50',
    icon: Activity,
    domainLabel: 'Priority Queue Slot Engine',
  },
  pds: {
    gradient: 'from-slate-900 via-[#0E1628] to-indigo-950/50',
    accentLine: 'from-indigo-400/50 to-blue-500/40',
    icon: Wheat,
    domainLabel: 'Django Analytics & Forecasting',
  },
  network: {
    gradient: 'from-slate-950 via-[#0D1729] to-blue-950/60',
    accentLine: 'from-blue-500/50 to-slate-400/40',
    icon: Network,
    domainLabel: 'Scapy Multi-Threaded Packet Capture',
  },
  embedded: {
    gradient: 'from-slate-900 via-[#101829] to-violet-950/50',
    accentLine: 'from-violet-400/50 to-blue-500/50',
    icon: Car,
    domainLabel: 'Real-Time Microcontroller Telemetry',
  },
};

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  const cfg = THEME_CONFIG[project.visualTheme];
  const Icon = cfg.icon;

  return (
    <div
      className={`relative h-44 w-full overflow-hidden border-b border-white/[0.07] bg-gradient-to-br ${cfg.gradient} p-6 flex flex-col justify-between`}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${project.id}`}
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} className="text-slate-300" />
      </svg>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#070B14]/70 text-blue-300 shadow-sm">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-mono text-[11px] text-slate-400 tracking-wide">
          {project.languages.slice(0, 3).join(' · ')}
        </span>
      </div>

      <div className="relative z-10">
        <div className={`mb-2 h-px w-16 bg-gradient-to-r ${cfg.accentLine}`} aria-hidden="true" />
        <p className="text-xs font-medium text-slate-300">{cfg.domainLabel}</p>
      </div>
    </div>
  );
}
