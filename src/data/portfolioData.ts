import { SkillCategory, ArchitectureModule, WorkExperience, EducationItem, AwardItem } from '../types';

export const PERSONAL_INFO = {
  name: "Nikhil Andola",
  role: "Full Stack Software Development Engineer",
  focus: "Full Stack Web & Mobile Systems • React, Node.js & TypeScript • Cross-Platform iOS & Android • Cloud DevOps & Microservices • Keycloak SSO",
  location: "Noida, Uttar Pradesh, India",
  phone: "+91-7579-233-972",
  status: "Full Stack Software Engineer • Open to High-Impact Opportunities",
  bio: "Full Stack Software Development Engineer with proven expertise architecting end-to-end web and cross-platform mobile systems (iOS & Android). Experienced across TypeScript/React micro-frontends, 50+ reusable component libraries, Node.js RESTful APIs, Keycloak enterprise SSO (10,000+ users), and automated Docker/Kubernetes CI/CD pipelines (77% deployment time reduction). Passionate about scalable distributed architecture, clean code, and zero-drift DSP mobile applications.",
  github: "https://github.com/NikhilAndola",
  linkedin: "https://linkedin.com/in/nikhilandola",
  email: "nikhilandola123@gmail.com",
  upiId: "nikhilandola@upi",
  repoUrl: "https://github.com/NikhilAndola",
};

export const HIGHLIGHT_STATS = [
  { value: "Full Stack", label: "Web & Mobile Systems", sublabel: "React, Node.js & React Native" },
  { value: "iOS & Android", label: "Cross-Platform Apps", sublabel: "Expo & Native Hardware Bridges" },
  { value: "10,000+", label: "Users Authenticated", sublabel: "Keycloak SSO & API Security" },
  { value: "77%", label: "Deployment Cut", sublabel: "45m → 10m via Docker & K8s" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cross-Platform Mobile (iOS & Android)",
    icon: "Smartphone",
    description: "Engineering high-performance cross-platform mobile applications for iOS & Android with React Native, Expo, and native hardware bridges.",
    skills: [
      { name: "React Native & Expo SDK (iOS & Android)", level: 95, tag: "Cross-Platform", highlight: true },
      { name: "Native Hardware Bridges (Audio DSP, Haptics)", level: 93, tag: "Native Bridge", highlight: true },
      { name: "Cross-Platform 60 FPS UI & Gestures", level: 94, tag: "Mobile UI", highlight: true },
      { name: "Offline Persistence & State (AsyncStorage/SQLite)", level: 92, tag: "Data Storage", highlight: true },
      { name: "App Store & Google Play Store Deployment", level: 90, tag: "Distribution" },
      { name: "TypeScript Strict & Mobile Safe Area UI", level: 96, tag: "Mobile Core" },
    ]
  },
  {
    title: "Frontend & Monorepo Architecture",
    icon: "Layout",
    description: "Designing modular monorepos, reusable TypeScript component libraries, and performant micro-frontend web applications.",
    skills: [
      { name: "TypeScript & Modern JavaScript (ESNext)", level: 96, tag: "Core", highlight: true },
      { name: "React.js & State Systems (Redux/Context)", level: 96, tag: "Frontend", highlight: true },
      { name: "Turborepo & Monorepo Workspaces (+60% Build)", level: 94, tag: "Architecture", highlight: true },
      { name: "Micro-frontend Distributed Architecture", level: 92, tag: "Architecture", highlight: true },
      { name: "50+ Reusable Component Systems & Design Tokens", level: 95, tag: "Design System", highlight: true },
      { name: "Tailwind CSS, HTML5 & Responsive UX", level: 94, tag: "Styling" },
    ]
  },
  {
    title: "Backend, APIs & Cloud Identity",
    icon: "Cpu",
    description: "Developing resilient backend services, RESTful APIs, Keycloak Single Sign-On (SSO), and scalable database systems.",
    skills: [
      { name: "Node.js & Express RESTful APIs", level: 92, tag: "Backend", highlight: true },
      { name: "Keycloak SSO & Enterprise IAM (10k+ Users)", level: 94, tag: "Auth Security", highlight: true },
      { name: "Database Design (PostgreSQL / MongoDB / Prisma)", level: 90, tag: "Database", highlight: true },
      { name: "Secure Authentication & Role-Based Access (RBAC)", level: 93, tag: "Security", highlight: true },
      { name: "Microservices Architecture & Data Pipelines", level: 89, tag: "Backend" },
      { name: "API Gateway, WebSockets & Integrations", level: 91, tag: "APIs" },
    ]
  },
  {
    title: "DevOps, Cloud & System Testing",
    icon: "Layers",
    description: "Automating cloud deployments, Docker containerization, Kubernetes orchestration, and automated test frameworks.",
    skills: [
      { name: "GitHub Actions CI/CD (77% Time Reduction)", level: 95, tag: "Automation", highlight: true },
      { name: "Docker Containerization & Multi-Stage Builds", level: 92, tag: "DevOps", highlight: true },
      { name: "Kubernetes (K8s) Cluster Orchestration", level: 88, tag: "Cloud", highlight: true },
      { name: "Jest & Cypress Automated Testing (85% Coverage)", level: 93, tag: "QA / Testing", highlight: true },
      { name: "AWS & OpenStack Cloud Infrastructure", level: 89, tag: "Cloud" },
      { name: "Git & GitHub Enterprise Workflows", level: 96, tag: "VCS", highlight: true },
    ]
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: "Enterprise Cloud & Edge Systems",
    role: "Software Development Engineer",
    period: "December 2022 – Present",
    location: "India",
    current: true,
    tagline: "Monorepo frontend architecture, micro-frontends, Keycloak SSO authentication, and automated DevOps infrastructure.",
    highlights: [
      "Architected and implemented a scalable monorepo-based frontend architecture, including a TypeScript-based React component library with 50+ reusable components, improving development efficiency and ensuring UI consistency across multiple applications.",
      "Developed and maintained modular monorepo setup with Turborepo, accelerating build and deployment consistency across multiple teams by 60%.",
      "Integrated Single Sign-On (SSO) using Keycloak, enhancing authentication security and improving login efficiency for 10,000+ users.",
      "Streamlined CI/CD pipelines with GitHub Actions, Docker, and Kubernetes, decreasing deployment time from 45 minutes to 10 minutes (77% reduction).",
      "Led a team of 5 developers, collaborating with Product Managers and UX/UI Designers to deliver high-performance React/TypeScript micro-frontend applications, improving performance by 25%, reducing development time by 30%, and ensuring stable, high-quality releases."
    ],
    metrics: [
      { label: "Component Library", value: "50+ Reusable Components" },
      { label: "SSO Scale", value: "10,000+ Users (Keycloak)" },
      { label: "Deployment Time", value: "45m → 10m (77% Cut)" },
      { label: "Build Acceleration", value: "+60% via Turborepo" },
      { label: "Team Leadership", value: "5 Developers Led" },
      { label: "Performance Gain", value: "+25% App Speed" }
    ],
    technologies: [
      "TypeScript", "React.js", "Turborepo", "Micro-frontend", 
      "Keycloak SSO", "Docker", "Kubernetes", "GitHub Actions", 
      "Redux", "AWS", "OpenStack"
    ]
  },
  {
    company: "Sofster",
    role: "Associate Software Developer",
    period: "November 2021 – November 2022",
    location: "India",
    current: false,
    tagline: "End-to-end scalable web applications, custom SEO tooling, RESTful backend APIs, and automated test frameworks.",
    highlights: [
      "Led the end-to-end development of a scalable web application, spanning frontend, backend, database design, and deployment.",
      "Designed components and implemented core logic for online SEO tool as well as SEO WordPress plugin using React, boosting SEO optimization performance by 30%.",
      "Developed RESTful APIs and backend services to support scalable data flows, while building reusable React components to deliver a consistent and responsive UI.",
      "Established a robust testing framework with Jest and Cypress, reaching 85% coverage, reducing QA feedback loops by 50%, and improving release stability."
    ],
    metrics: [
      { label: "SEO Performance", value: "+30% Optimization" },
      { label: "Test Coverage", value: "85% (Jest & Cypress)" },
      { label: "QA Feedback Cycle", value: "-50% Reduction" },
      { label: "Full-Stack Scope", value: "Frontend, Backend & DB" }
    ],
    technologies: [
      "React.js", "JavaScript (ES6+)", "RESTful APIs", "Jest", 
      "Cypress", "WordPress Plugin", "SEO Tooling", "HTML5", 
      "CSS3", "Database Design"
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Manavbharati University",
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    period: "August 2014 – July 2018",
    location: "Solan, Himachal Pradesh, India",
    highlights: [
      "In-depth core coursework in Data Structures, Algorithms, Software Engineering, Database Management Systems, and Computer Networks.",
      "Recognized in university hackathon for building an official alumni web platform accepted by the institution."
    ]
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    title: "“Mountain Mover” Certificate of Appreciation",
    organization: "Engineering Excellence Recognition",
    date: "December 2022",
    description: "Honored for achieving the toughest organizational goals through hard work, dedication, and technical excellence in frontend architecture and monorepo delivery.",
    badgeText: "Excellence Award"
  },
  {
    title: "Hackathon Recognition (MU)",
    organization: "Manavbharati University",
    date: "May 2017",
    description: "Collaborated in a team of 5 to build an alumni web platform, which was officially accepted and recognized by the university administration.",
    badgeText: "Hackathon Winner"
  }
];

export const ARCHITECTURE_MODULES: ArchitectureModule[] = [
  {
    id: "monorepo-component-arch",
    title: "Modular Monorepo & UI Component Library",
    subtitle: "Enterprise Turborepo Pattern",
    description: "Architected a scalable monorepo structure housing 50+ reusable, strictly-typed React components. Decoupled packages allow independent versioning, shared configs, and accelerated build caching across multiple enterprise teams.",
    language: "typescript",
    highlights: [
      "Shared TypeScript & ESLint configs ensuring strict type consistency",
      "50+ accessible, themeable UI components consumed by multiple apps",
      "Turborepo remote caching reducing build & CI times by 60%"
    ],
    codeSnippet: `// Monorepo Workspace Structure & Reusable Component Architecture
export interface ComponentProps<T = Record<string, unknown>> {
  variant?: 'primary' | 'secondary' | 'glass' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  themeConfig?: ThemeTokens;
}

// Higher-order polymorphic component with strict type safety
export const createMonorepoComponent = <P extends object>(
  Component: React.ComponentType<P>,
  defaultMeta: ComponentMetadata
) => {
  return React.memo(React.forwardRef<HTMLElement, P & ComponentProps>((props, ref) => {
    const { variant = 'primary', size = 'md', isLoading, ...rest } = props;
    const tokens = useThemeTokens(variant);
    
    if (isLoading) return <SkeletonLoader size={size} />;
    return <Component ref={ref} {...(rest as P)} tokens={tokens} />;
  }));
};`
  },
  {
    id: "lookahead-timer",
    title: "Lookahead Audio Scheduler",
    subtitle: "Precision Timing Pattern",
    description: "Standard setInterval/setTimeout drift significantly under thread load. This Lookahead algorithm decouples UI ticks from the audio clock, scheduling synthesized oscillator bursts ahead in the AudioContext queue.",
    language: "typescript",
    highlights: [
      "Zero audio drift even during heavy background tasks",
      "Lookahead interval (25ms) with schedule window (100ms)",
      "Precise beat timestamp tracking and visual dispatch sync"
    ],
    codeSnippet: `// Web Audio Lookahead Scheduler Pattern
const scheduleNextBeats = (audioCtx: AudioContext, state: MetronomeState) => {
  const secondsPerBeat = 60.0 / state.bpm;
  
  // Advance audio queue within the lookahead horizon
  while (nextBeatTime < audioCtx.currentTime + SCHEDULE_AHEAD_TIME) {
    playSynthesizedTick(audioCtx, nextBeatTime, currentBeat, soundPreset);
    
    // Dispatch UI visual strobe right as the beat plays
    scheduleVisualSync(nextBeatTime - audioCtx.currentTime, currentBeat);
    
    // Increment subdivision / bar counter
    nextBeatTime += secondsPerBeat / state.subdivisionFactor;
    currentBeat = (currentBeat + 1) % (state.timeSignature.beats * state.subdivisionFactor);
  }
};`
  },
  {
    id: "keycloak-sso",
    title: "Keycloak SSO & Identity Integration",
    subtitle: "Enterprise Auth Flow",
    description: "Implemented Single Sign-On (SSO) via Keycloak for 10,000+ users, featuring automated token refresh, role-based access control (RBAC), and session interceptors for micro-frontend applications.",
    language: "typescript",
    highlights: [
      "Silent token refresh preventing authentication drops during active sessions",
      "Unified role-based route guards across micro-frontend apps",
      "Encrypted token storage with CSP & CORS security headers"
    ],
    codeSnippet: `// Keycloak SSO Auth Provider & Token Interceptor
export class KeycloakAuthService {
  private static instance: KeycloakAuthService;
  private keycloak: KeycloakInstance;

  public async initAuth(): Promise<boolean> {
    const authenticated = await this.keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256',
    });
    
    // Setup automatic refresh before expiration
    this.keycloak.onTokenExpired = () => {
      this.keycloak.updateToken(30).catch(() => this.keycloak.login());
    };
    
    return authenticated;
  }
}`
  }
];
