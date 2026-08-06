/**
 * Single source of truth for every piece of content on the site.
 * Facts here come from `public/CV/CV_Marios Pogiatzeas_IT-1.pdf` — do not invent additions.
 */

export type NavLink = {
  label: string;
  href: string;
};

/** Nav labels map 1:1 to the section ids rendered in `src/app/page.tsx`. */
export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Marios Pogiatzeas",
  eyebrow: "Full-Stack Developer & IT Professional",
  headline: "I build web applications — and keep the systems behind them running.",
  bio: "Full-stack developer with four years inside enterprise IT. I ship end-to-end web apps with React, Next.js and Node.js, and I've administered Windows, Azure and Active Directory environments under strict SLAs. Currently a software developer intern at the Central Bank of Cyprus.",
  email: "marios1522@hotmail.com",
  github: "https://github.com/marios22132-cell",
  photo: "/image/MariosPhoto.png",
  photoAlt: "Portrait of Marios Pogiatzeas",
  /** Space in the filename has to stay encoded for the browser to resolve it. */
  cv: "/CV/CV_Marios%20Pogiatzeas_IT-1.pdf",
} as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "Central Bank of Cyprus",
    period: "Jun 2026 — Present",
    highlights: [
      "Spearheaded a market research and comparative evaluation project for enterprise Data Catalog solutions, driving the organisation's Data Democratisation initiative.",
      "Developed a scoring matrix and cost-deployment analysis identifying technical strengths, weaknesses and implementation risks for each platform.",
      "Delivered a final market research report and an executive presentation proposing a high-level target architecture for centralised data discovery and access management.",
    ],
  },
  {
    role: "IT Service Desk Administrator",
    company: "XM",
    period: "Mar 2026 — Jun 2026",
    highlights: [
      "Administered Windows operating systems, Azure Portal and GSuite environments, installing and configuring computer hardware and software applications.",
      "Ensured the seamless daily operation of MT4 and MT5 trading platforms through routine system audits and proactive resolution of hardware and software conflicts.",
      "Managed the corporate IT ticketing system and monitoring tools, providing fast technical support and training to staff while strictly adhering to agreed SLAs.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Eadvertise",
    period: "Dec 2025 — Mar 2026",
    highlights: [
      "Designed and developed end-to-end web applications using React, Node.js and Tailwind CSS to build responsive, fast and secure platforms.",
      'Led the technical implementation of the "thisIsPaphos" project, managing the full development lifecycle from architecture and database design through to deployment.',
    ],
  },
  {
    role: "IT Officer",
    company: "University of Neapolis",
    period: "Oct 2022 — Dec 2025",
    highlights: [
      "Provided prompt 1st level IT support to staff and associates, troubleshooting and resolving hardware and software issues.",
      "Monitored local networks and performed maintenance on IT systems to ensure optimal performance.",
      "Participated in the planning and execution of IT infrastructure upgrade and optimisation projects.",
      "Administered user accounts and access rights via Active Directory, enforcing security permissions across departments.",
    ],
  },
];

export type Project = {
  title: string;
  context: string;
  description: string;
  tech: string[];
  /** Live deployment, when there is one. */
  demo?: string;
  /** Public source. Absent for client and employer work. */
  repo?: string;
  /** Shown when neither link exists, so the card never looks broken. */
  note?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Kanaria Developers",
    context: "Corporate website · Live",
    description:
      "A premium marketing site for a luxury real estate development firm, with an interactive map of the property portfolio and a transactional enquiry flow wired straight to the sales inbox.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Maps", "Resend"],
    demo: "https://kanaria-developers-web-site.vercel.app",
    repo: "https://github.com/marios22132-cell/Kanaria-Developers-Web-Site",
  },
  {
    title: "MMA Gym Platform",
    context: "Full-stack web app",
    description:
      "A booking and commerce platform for an MMA gym: personal trainer scheduling, an online shop for gear and supplements, and role-based dashboards behind authenticated, validated APIs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Zod", "Tailwind CSS"],
    repo: "https://github.com/marios22132-cell/Mma_e-comerce_Web-app",
  },
  {
    title: "Enterprise Data Catalog Evaluation",
    context: "Central Bank of Cyprus",
    description:
      "A comparative evaluation of enterprise data catalog platforms for the bank's Data Democratisation initiative — scoring matrix, cost-deployment analysis, and an executive presentation proposing a target architecture for centralised data discovery and access management.",
    tech: ["Market research", "Solution architecture", "Data governance"],
    note: "Internal project — not publicly available",
  },
  {
    title: "thisIsPaphos",
    context: "Eadvertise · Technical lead",
    description:
      "A full-stack web platform taken from initial architecture and database design all the way through to production deployment.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    note: "Client project — source not public",
  },
  {
    title: "Backend Mastery",
    context: "REST API",
    description:
      "A production-shaped Node.js and Express API over MongoDB, covering JWT authentication, file uploads, transactional email and structured error handling.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    repo: "https://github.com/marios22132-cell/backend-mastery",
  },
  {
    title: "LSTM vs Transformer",
    context: "BSc thesis · Practical implementation",
    description:
      "The experimental counterpart to my thesis: a side-by-side training and evaluation harness comparing an LSTM against a Transformer on the same sequence task.",
    tech: ["Python", "PyTorch", "scikit-learn", "NumPy"],
    repo: "https://github.com/marios22132-cell/lstm-transformer_comparison",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Web Development",
    items: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Infrastructure",
    items: ["Windows", "macOS", "Linux", "Azure Portal", "Nginx", "GSuite"],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "Docker", "Jira", "Active Directory"],
  },
];

export const EDUCATION = {
  degree: "BSc Applied Computer Science",
  school: "Neapolis University Pafos",
  faculty: "School of Economics, Business and Computer Sciences",
  thesis:
    "Investigation, comprehension and theoretical evaluation of the Transformer architecture, from the foundational “Attention Is All You Need” model to the contemporary variants used in modern AI systems.",
} as const;

export const CERTIFICATIONS = [
  "The Complete JavaScript Course: From Zero to Expert — Jonas Schmedtmann",
  "The Complete Web Development Course — Hitesh Choudhary",
] as const;

export const LANGUAGES = ["Greek — Native", "English — Professional"] as const;
