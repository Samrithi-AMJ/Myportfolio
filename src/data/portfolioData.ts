export type ProjectCategory =
  | 'Full Stack'
  | 'Artificial Intelligence'
  | 'Machine Learning'
  | 'Backend'
  | 'Other';

export type ProjectOwnership = 'Individual Project' | 'Team Project';

export interface PortfolioProject {
  id: string;
  repoName?: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  ownership: ProjectOwnership;
  featured: boolean;
  summary: string;
  problemStatement: string;
  keyFeatures: string[];
  contribution: string;
  techStack: string[];
  languages: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  sourceLabel: string;
  visualTheme:
    | 'agri'
    | 'care'
    | 'weather'
    | 'trade'
    | 'waste'
    | 'analytics'
    | 'security'
    | 'ev'
    | 'pds'
    | 'network'
    | 'embedded';
  badgeNote?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'Hackathon' | 'Academic';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  score: string;
  period: string;
  details: string;
}

export interface CodingPlatformMetric {
  platform: string;
  metric: string;
  context: string;
  source: string;
  url?: string;
}

export const PORTFOLIO_PROFILE = {
  name: 'Samrithi AMJ',
  headline: 'Computer Science & Engineering Student · Full-Stack & AI Developer',
  subheadline:
    'Building production-oriented full-stack applications, retrieval-augmented AI systems, and backend data architectures.',
  bio: 'Second-year B.E. Computer Science and Engineering student at Sri Eshwar College of Engineering (GPA 9.33) with hands-on experience in software engineering, RAG-based AI pipelines, and data analytics. Skilled across C++, Python, Java, React, TypeScript, Spring Boot, FastAPI, and PostgreSQL, with a focus on practical systems that solve real-world problems.',
  location: 'Coimbatore, Tamil Nadu, India',
  institution: 'Sri Eshwar College of Engineering',
  degreeSummary: 'B.E. Computer Science & Engineering (2025–2029)',
  email: 'samrithi.amj2025cse@sece.ac.in',
  phone: '+91 88702 73015',
  photoUrl: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_10.14.02_AM_17d939bc.jpeg',
  resumeUrl: '/assets/aistudio/Samrithi.AMJ_Resume_updated__1.1__e326f280.pdf',
  resumeFileName: 'Samrithi_AMJ_Resume.pdf',
  githubUsername: 'Samrithi-AMJ',
  githubUrl: 'https://github.com/Samrithi-AMJ',
  linkedinUrl: 'https://www.linkedin.com/in/samrithi-amj-599080381',
  linkedinAccessNote:
    'LinkedIn profile link verified. Automated profile scraping was blocked by LinkedIn access controls (HTTP 429), so all profile data on this site is strictly sourced from verified public GitHub repositories and the uploaded official resume.',
  githubSnapshotStats: {
    publicRepos: 13,
    contributionsLastYear: 47,
    primaryLanguages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML/CSS', 'PLpgSQL'],
  },
} as const;

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Full-Stack Engineering',
    description:
      'Architecting end-to-end applications across React, TypeScript, FastAPI, Django, Spring Boot, and Supabase/PostgreSQL with authentication and Row-Level Security.',
  },
  {
    title: 'Applied AI & RAG Systems',
    description:
      'Developing multilingual LLM workflows, LoRA fine-tuned adapters (Qwen2.5-0.5B-Instruct), vision-language leaf pathology pipelines, and grounded RAG retrieval.',
  },
  {
    title: 'Systems & Analytics Foundations',
    description:
      'Grounded in Data Structures, Algorithms, OOP, and DBMS—evidenced by Java priority-queue slot allocators, Scapy network sniffers, and automated analytics tools.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    summary: 'Core systems, object-oriented, scripting, and typed web languages used across repositories.',
    skills: ['Python', 'Java', 'C++', 'C', 'TypeScript', 'JavaScript', 'SQL', 'PL/pgSQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    summary: 'Responsive client interfaces, state workflows, charting, and interactive geospatial UI.',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Chart.js', 'Leaflet'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    summary: 'RESTful API services, authentication layers, role-based access control, and server routing.',
    skills: ['FastAPI', 'Spring Boot', 'Django', 'Node.js', 'Express', 'Spring Data JPA', 'REST APIs'],
  },
  {
    id: 'databases',
    title: 'Databases',
    summary: 'Relational schemas, Row-Level Security policies, NoSQL document stores, and embedded DBs.',
    skills: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    summary: 'LLM fine-tuning, retrieval-augmented generation, classical ML, and data science pipelines.',
    skills: [
      'RAG Pipelines',
      'LoRA Fine-Tuning',
      'Qwen2.5 / Groq LLMs',
      'Ollama',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    summary: 'Build pipelines, version control, IDE environments, BI tools, and embedded toolchains.',
    skills: ['Git', 'GitHub', 'VS Code', 'Maven', 'Streamlit', 'Android Studio', 'Arduino IDE', 'Power BI'],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'uzhavan-ai',
    repoName: 'UzhavanAI',
    title: 'UzhavanAI',
    subtitle: 'Multilingual LLM & Vision Farmer Advisory System',
    categories: ['Artificial Intelligence', 'Full Stack'],
    ownership: 'Individual Project',
    featured: true,
    summary:
      'Multilingual agricultural advisory platform supporting 6 Indian languages with crop disease leaf vision analysis, RAG retrieval grounded in TNAU/ICAR data, and Supabase PostgreSQL persistence.',
    problemStatement:
      'Smallholder farmers often lack timely, localized crop advisory and reliable plant disease diagnostics in their native language without expensive cloud AI subscriptions.',
    keyFeatures: [
      'Supports 6 Indian languages (Tamil, English, Hindi, Telugu, Bengali, Marathi) via Groq llama-3.3-70b-versatile',
      'Crop disease image diagnostics using llama-3.2-11b-vision-preview with automatic 768px JPEG downsampling',
      'Strict image guardrails returning NOT_A_PLANT for non-plant photos and UNCERTAIN for ambiguous cases',
      'Optional RAG knowledge retrieval from TNAU & ICAR extension references with graceful HTTP 429 handling',
      'React + TypeScript + FastAPI + Supabase PostgreSQL architecture with Leaflet maps and Capacitor Android support',
    ],
    contribution:
      'Designed and built the React/TypeScript frontend, FastAPI AI service, Supabase persistence layer, LoRA training scripts, and knowledge ingestion pipeline.',
    techStack: [
      'React',
      'TypeScript',
      'FastAPI',
      'Supabase',
      'PostgreSQL',
      'Groq LLM',
      'RAG',
      'Leaflet',
      'Capacitor',
    ],
    languages: ['TypeScript', 'Python', 'JavaScript'],
    githubUrl: 'https://github.com/Samrithi-AMJ/UzhavanAI',
    sourceLabel: 'GitHub Repository & Resume',
    visualTheme: 'agri',
  },
  {
    id: 'care-connect',
    repoName: 'CareConnect',
    title: 'CareConnect',
    subtitle: 'Multilingual Digital Healthcare & Care Coordination Platform',
    categories: ['Full Stack'],
    ownership: 'Individual Project',
    featured: true,
    summary:
      'Accessibility-first healthcare coordination platform connecting patients, families, and caregivers beyond the hospital across 6 Indian languages with Supabase Auth and Row-Level Security.',
    problemStatement:
      'Post-discharge medication schedules, follow-up appointments, and caregiver permissions are frequently fragmented across paper records and uncoordinated family messages.',
    keyFeatures: [
      'End-to-end patient & caregiver portals for medicines, appointments, post-discharge tasks, and health records',
      'PostgreSQL backend with Supabase Auth, Storage, and strict Row-Level Security (RLS) caregiver access control',
      '6-language interface (English, Tamil, Hindi, Telugu, Kannada, Malayalam) with text-size, contrast, and reduced-motion accessibility controls',
      'Consent & Privacy Centre, caregiver invitation permissions, voice assistant hooks, and automatic localStorage demo fallback',
    ],
    contribution:
      'Engineered the full-stack application, PostgreSQL RLS schema in PL/pgSQL, multilingual UI flows, and Vercel deployment.',
    techStack: ['JavaScript', 'Vite', 'Supabase', 'PostgreSQL', 'PL/pgSQL', 'HTML5', 'CSS3', 'RLS'],
    languages: ['JavaScript', 'PLpgSQL', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/Samrithi-AMJ/CareConnect',
    liveDemoUrl: 'https://care-connect-sandy.vercel.app',
    sourceLabel: 'GitHub Repository & Resume',
    visualTheme: 'care',
  },
  {
    id: 'tradesaathi',
    title: 'TradeSaathi',
    subtitle: 'LLM-Based Harmonized System (HS) Code Classification',
    categories: ['Artificial Intelligence'],
    ownership: 'Team Project',
    featured: true,
    badgeNote: 'Best Innovative Project · LLM FORGE Hackathon 2026',
    summary:
      'Fine-tuned Qwen2.5-0.5B-Instruct with LoRA and integrated the adapter into a RAG-based multi-agent pipeline for structured 6-digit HS customs code classification.',
    problemStatement:
      'Cross-border trade compliance requires accurate 6-digit HS tariff classification from unstructured product descriptions, where generic LLMs frequently hallucinate invalid codes.',
    keyFeatures: [
      'LoRA fine-tuning on Qwen2.5-0.5B-Instruct specialized for 6-digit HS code taxonomy',
      'RAG-grounded multi-agent verification pipeline validating tariff chapters and headings',
      'Structured JSON outputs containing HS code, confidence score, official description, and reasoning trace',
    ],
    contribution:
      'Fine-tuned Qwen2.5-0.5B-Instruct using LoRA for 6-digit HS code classification and integrated the adapter into the RAG-based multi-agent pipeline.',
    techStack: ['Python', 'Qwen2.5-0.5B-Instruct', 'LoRA', 'RAG', 'Multi-Agent NLP'],
    languages: ['Python'],
    sourceLabel: 'Verified Resume & Hackathon Recognition',
    visualTheme: 'trade',
  },
  {
    id: 'atmos-now',
    repoName: 'AtmosNow',
    title: 'AtmosNow',
    subtitle: 'Chennai Short-Term Rain Nowcasting Prototype',
    categories: ['Machine Learning', 'Backend'],
    ownership: 'Individual Project',
    featured: true,
    summary:
      'AI-assisted short-term rainfall nowcasting system for Chennai fusing Open-Meteo NWP pressure-level observations with RainViewer radar mosaic proxies via FastAPI and Random Forest.',
    problemStatement:
      'Hyper-local short-term rainfall estimation requires combining heterogeneous atmospheric model variables with live radar-intensity mosaics on a unified spatial grid.',
    keyFeatures: [
      'Automated 10-minute background ingestion from Open-Meteo weather/pressure APIs and RainViewer radar mosaics',
      'Spatial grid fusion and timestamped historical observation storage',
      'Pre-trained Random Forest model (joblib) serving short-term radar-proxy nowcasts',
      'FastAPI REST endpoints (/api/health, /api/live-status, history, prediction) with live polling frontend',
    ],
    contribution:
      'Built the multi-source ingestion pipeline, spatial fusion normalizer, Random Forest inference endpoint, and light/dark polling dashboard.',
    techStack: ['Python', 'FastAPI', 'Uvicorn', 'scikit-learn', 'Pandas', 'SciPy', 'Open-Meteo', 'RainViewer'],
    languages: ['Python', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Samrithi-AMJ/AtmosNow',
    sourceLabel: 'GitHub Repository',
    visualTheme: 'weather',
  },
  {
    id: 'waste-segregation',
    repoName: 'WasteSegregation',
    title: 'Smart Municipal Waste Tracker',
    subtitle: 'Full-Stack Solid Waste Segregation & Collection System',
    categories: ['Backend', 'Full Stack'],
    ownership: 'Individual Project',
    featured: true,
    summary:
      'Java 17 & Spring Boot 3.3 municipal tracking platform managing citizens, workers, vehicles, live DB-computed segregation rates, overdue collection alerts, and citizen complaints.',
    problemStatement:
      'Municipalities need real-time visibility into household segregation compliance, missed pickups, and citizen complaints without manual spreadsheet reconciliation.',
    keyFeatures: [
      'Automatic segregation status derivation (PROPER / PARTIAL / IMPROPER) and live segregation percentage queries',
      'Automated overdue detection surfacing PENDING collections older than 7 days on the dashboard',
      'Role-based ADMIN and CITIZEN views with BCrypt password hashing and citizen complaint lifecycle tracking',
      'Centralized @RestControllerAdvice exception handling, Chart.js analytics, and automatic DataSeeder',
    ],
    contribution:
      'Implemented the layered Spring Boot REST API (Controllers, Services, JPA Repositories, DTOs), MySQL schema, and vanilla JS/Chart.js frontend.',
    techStack: ['Java 17', 'Spring Boot 3.3', 'Spring Data JPA', 'Hibernate', 'MySQL 8', 'Maven', 'Chart.js', 'BCrypt'],
    languages: ['Java', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Samrithi-AMJ/WasteSegregation',
    sourceLabel: 'GitHub Repository',
    visualTheme: 'waste',
  },
  {
    id: 'dashboard-agent',
    repoName: 'Dashboard_generation_agent',
    title: 'Dashboard Generation Agent',
    subtitle: 'AI-Ready Automated CSV & Excel Analytics Builder',
    categories: ['Artificial Intelligence', 'Other'],
    ownership: 'Individual Project',
    featured: true,
    summary:
      'Streamlit analytics application that ingests CSV/Excel datasets up to 50MB, cleans anomalies, infers column types, generates statistical visualizations, and produces plain-English insights.',
    problemStatement:
      'Non-technical analysts spend hours writing repetitive Pandas and plotting boilerplate before getting initial KPIs or spotting correlations in raw CSV exports.',
    keyFeatures: [
      'Automatic detection of numeric, categorical, and date columns with missing-value and duplicate cleaning',
      'Auto-generated distribution histograms, time-series trends, correlation heatmaps, and custom chart builder',
      'Multi-column categorical filtering (up to 3 columns), full-table search, and filtered CSV/Excel export',
      'Plain-English insight engine built as Phase-1 foundation for natural-language Groq/Ollama querying',
    ],
    contribution:
      'Developed the Streamlit application, automated insight heuristics, defensive 50MB file validation, and themed light/dark visualizations.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Data Visualization', 'Excel/CSV Processing'],
    languages: ['Python'],
    githubUrl: 'https://github.com/Samrithi-AMJ/Dashboard_generation_agent',
    sourceLabel: 'GitHub Repository',
    visualTheme: 'analytics',
  },
  {
    id: 'fault-server-analysis',
    repoName: 'Fault_Server_Analysis',
    title: 'DDoS Detection & Prevention System',
    subtitle: 'ML Network Traffic Analyzer & Django Monitoring Dashboard',
    categories: ['Machine Learning', 'Backend'],
    ownership: 'Individual Project',
    featured: false,
    summary:
      'Network traffic analysis and DDoS detection platform combining CSV packet capture preprocessing, MongoDB traffic storage, scikit-learn classification, and a Django dashboard.',
    problemStatement:
      'Identifying anomalous DDoS traffic spikes requires storing high-volume packet capture features efficiently and surfacing actionable prevention views to operators.',
    keyFeatures: [
      'Packet capture CSV preprocessing pipeline (process_data.py) feeding cleaned datasets into MongoDB',
      'scikit-learn based DDoS traffic pattern detection',
      'Multi-view Django web dashboard (Home, Monitor, Analysis, Prevention, Reports)',
    ],
    contribution:
      'Built the Python data processing scripts, MongoDB ingestion utilities, and Django monitoring views.',
    techStack: ['Python', 'Django', 'MongoDB', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SQLite'],
    languages: ['Python', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Samrithi-AMJ/Fault_Server_Analysis',
    sourceLabel: 'GitHub Repository',
    visualTheme: 'security',
  },
  {
    id: 'smart-ev-charging',
    repoName: 'SmartEVcharging',
    title: 'Smart EV Charging Slot & Queue Engine',
    subtitle: 'Core Java Priority-Aware Slot Allocation System',
    categories: ['Backend', 'Other'],
    ownership: 'Individual Project',
    featured: false,
    summary:
      'Core Java (JDK 17+) simulation engine managing multi-station EV charging networks with connector-matched slot allocation and a priority-aware waiting queue.',
    problemStatement:
      'EV charging networks must match heterogeneous vehicle connectors to available slots while balancing station load and prioritizing emergency vehicles fairly.',
    keyFeatures: [
      'Smart slot allocation combining connector compatibility matching with station load balancing',
      'Priority-based waiting queue (EMERGENCY > HIGH > NORMAL > LOW) with FIFO ordering per tier',
      'Automatic slot hand-off to the next matching queued vehicle upon session completion or cancellation',
    ],
    contribution:
      'Engineered in pure Java SE Collections without external frameworks, featuring defensive input validation and session history tracking.',
    techStack: ['Java SE (JDK 17+)', 'Data Structures', 'PriorityQueue', 'OOP'],
    languages: ['Java'],
    githubUrl: 'https://github.com/Samrithi-AMJ/SmartEVcharging',
    sourceLabel: 'GitHub Repository',
    visualTheme: 'ev',
  },
  {
    id: 'pds-analysis',
    repoName: 'PDS_Analysis_System',
    title: 'Food Distribution & PDS Analytics',
    subtitle: 'Django Analytics & Demand Forecasting for Public Distribution',
    categories: ['Full Stack', 'Other'],
    ownership: 'Individual Project',
    featured: false,
    summary:
      'Full-stack Django 6 analytics dashboard for India’s Public Distribution System with Admin CSV ingestion, Matplotlib charts, summary statistics, and NumPy linear-regression forecasting.',
    problemStatement:
      'Public food distribution planning benefits from state-by-state and year-by-year statistical inspection paired with baseline demand forecasting.',
    keyFeatures: [
      'Role-based Admin and User authentication with automated CSV dataset cleaning on upload',
      '4 analytical dashboards featuring base64-embedded Matplotlib charts and state/year filters',
      'Summary statistics (mean, median, standard deviation) and NumPy linear-regression demand forecast',
    ],
    contribution:
      'Built the Django models, Pandas/NumPy data utilities, Matplotlib visualization helpers, and HTML/CSS templates.',
    techStack: ['Python', 'Django 6', 'Pandas', 'NumPy', 'Matplotlib', 'SQLite', 'HTML5', 'CSS3'],
    languages: ['Python', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Samrithi-AMJ/PDS_Analysis_System',
    sourceLabel: 'GitHub Repository',
    visualTheme: 'pds',
  },
  {
    id: 'packet-sniffer',
    repoName: 'Packetsniffer',
    title: 'Advanced Network Packet Sniffer',
    subtitle: 'Real-Time Scapy Packet Capture & Tkinter GUI',
    categories: ['Other'],
    ownership: 'Individual Project',
    featured: false,
    summary:
      'Python desktop network sniffer powered by Scapy and multi-threaded Tkinter queues to capture live TCP, UDP, ICMP, and ARP packets with protocol charts and CSV export.',
    problemStatement:
      'Lightweight local network diagnostics often benefit from an accessible GUI displaying live protocol breakdowns and exportable packet logs.',
    keyFeatures: [
      'Concurrent packet capture using Python threading and thread-safe queues via Scapy',
      'Protocol detection (TCP, UDP, ICMP, ARP) with source/destination IP and port inspection',
      'Live protocol distribution charts, CSV packet logging, and timestamped text analysis reports',
    ],
    contribution:
      'Implemented the modular capture engine (sniffer.py), Tkinter dashboard (dashboard.py), logger, and chart components.',
    techStack: ['Python', 'Scapy', 'Tkinter', 'Threading', 'CSV Logging'],
    languages: ['Python'],
    githubUrl: 'https://github.com/Samrithi-AMJ/Packetsniffer',
    sourceLabel: 'GitHub Repository',
    visualTheme: 'network',
  },
  {
    id: 'guardian-car',
    title: 'GuardianCar',
    subtitle: 'Embedded Smart Vehicle Safety System',
    categories: ['Other'],
    ownership: 'Team Project',
    featured: false,
    summary:
      'Real-time embedded monitoring system integrating vehicle sensor inputs with microcontroller control logic for threshold-based hazard detection and automated safety alerts.',
    problemStatement:
      'Early detection of unsafe vehicle operating conditions requires deterministic, low-latency microcontroller processing of multi-sensor thresholds.',
    keyFeatures: [
      'Continuous real-time sensor polling and threshold-based decision logic',
      'Microcontroller control loop triggering automated vehicle safety alerts',
    ],
    contribution:
      'Developed embedded C/C++ microcontroller control logic integrating sensor inputs with automated alert triggers.',
    techStack: ['Embedded C/C++', 'Microcontroller', 'Sensors', 'Real-Time Systems', 'Arduino IDE'],
    languages: ['C', 'C++'],
    sourceLabel: 'Verified Official Resume',
    visualTheme: 'embedded',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'llm-forge-2026',
    title: 'Best Innovative Project — LLM FORGE Hackathon 2026',
    organization: 'LLM FORGE Hackathon',
    year: '2026',
    description:
      'Recognized for TradeSaathi, a LoRA fine-tuned Qwen2.5-0.5B-Instruct and RAG multi-agent pipeline for 6-digit HS code classification.',
    type: 'Hackathon',
  },
  {
    id: 'pyfest-3rd',
    title: '3rd Prize — PYFEST Hackathon',
    organization: 'Sri Eshwar College of Engineering',
    year: '2025–2026',
    description:
      'Awarded third place at the PYFEST Hackathon hosted by Sri Eshwar College of Engineering.',
    type: 'Hackathon',
  },
  {
    id: 'academic-topper-sem2',
    title: 'Academic Topper — 2nd Semester',
    organization: 'Sri Eshwar College of Engineering (B.E. CSE)',
    year: '2026',
    description:
      'Achieved the highest academic performance in the second semester of the B.E. Computer Science and Engineering program.',
    type: 'Academic',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'az-ai-901',
    title: 'Microsoft Azure AI Fundamentals (AI-901)',
    issuer: 'Microsoft',
    year: '2026',
  },
  {
    id: 'nptel-python',
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL',
    year: '2026',
  },
  {
    id: 'udemy-dsa',
    title: 'Mastering Data Structures & Algorithms using C & C++',
    issuer: 'Udemy',
    year: '2026',
  },
  {
    id: 'iitb-c',
    title: 'Completion of C Training',
    issuer: 'IIT Bombay',
    year: '2025',
  },
  {
    id: 'infosys-c',
    title: 'C Programming Course',
    issuer: 'Infosys',
    year: '2025',
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    id: 'sece',
    institution: 'Sri Eshwar College of Engineering',
    qualification: 'B.E. — Computer Science and Engineering',
    score: 'GPA: 9.33',
    period: '2025 – 2029',
    details:
      'Second-year undergraduate student focusing on Data Structures, OOP, DBMS, Design & Analysis of Algorithms, Full-Stack Web Engineering, and Applied AI.',
  },
  {
    id: 'hsc',
    institution: 'Adharsh Vidhyalaya Matric Hr. Sec. School',
    qualification: 'Higher Secondary Certificate (HSC)',
    score: '96.6%',
    period: '2023 – 2025',
    details: 'Completed Higher Secondary education with distinction (96.6%).',
  },
  {
    id: 'sslc',
    institution: 'Government Hr. Sec. School, Mylambadi',
    qualification: 'Secondary School Leaving Certificate (SSLC)',
    score: '90.6%',
    period: '2022 – 2023',
    details: 'Completed Secondary School education with 90.6%.',
  },
];

export const CODING_PRACTICE_METRICS: CodingPlatformMetric[] = [
  {
    platform: 'SkillRack',
    metric: '1,400+ Problems Solved',
    context: 'Structured C, C++, Java & Python problem-solving practice',
    source: 'Verified in Official Resume',
  },
  {
    platform: 'CodeChef',
    metric: '120+ Problems Solved',
    context: 'Algorithmic and competitive programming practice',
    source: 'Verified in Official Resume',
  },
  {
    platform: 'LeetCode',
    metric: '90+ Problems Solved',
    context: 'Data Structures & Algorithms interview problem sets',
    source: 'Verified in Official Resume',
  },
];
