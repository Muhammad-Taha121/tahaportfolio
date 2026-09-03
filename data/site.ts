export type HeroStat = {
  label: string;
  value: string;
};

export type AboutPanelItem = {
  title: string;
  description: string;
};

export type AboutStat = {
  value: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Muhammad Taha Sabir",
  title: "Full-Stack Engineer",
  logo: "mtahabuilds",
  email: "tahasabirch@gmail.com",
  phone: "+92-300-9476862",
  phoneDisplay: "+92 300 9476862",
  location: "Lahore, Pakistan",
  githubUrl: "https://github.com/Muhammad-Taha121",
  linkedinUrl: "https://linkedin.com/in/muhammad-taha-sabir",
  gmailComposeUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=tahasabirch@gmail.com&su=Project%20enquiry%20from%20your%20portfolio",
  mailtoUrl: "mailto:tahasabirch@gmail.com",
  // TODO: replace with the real production URL (custom domain or *.vercel.app) once deployed.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",

  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ] satisfies NavLink[],
  },

  hero: {
    headingLines: ["Full-Stack", "Engineer"],
    stats: [
      { label: "MERN & PERN", value: "Both stacks, end to end" },
      { label: "Next.js · Node", value: "Production-grade, typed, tested" },
      { label: "Lahore", value: "Working with teams worldwide" },
    ] satisfies HeroStat[],
    availability: "Available for new projects",
    bio: "I'm Taha, a full-stack engineer who designs and builds custom web solutions for clients worldwide — from marketing sites and e-commerce stores to dashboards, CRMs and full SaaS products.",
    githubButtonLabel: "GitHub",
  },

  about: {
    tag: "About",
    heading: "Software that works in production, not just in the demo.",
    panel: [
      {
        title: "Frontend",
        description:
          "React, Next.js, TypeScript, Tailwind. Reusable component systems with proper loading, error and empty states.",
      },
      {
        title: "Backend",
        description:
          "Node.js and Express APIs, JWT auth, role-based access, Supabase Row Level Security, database-level functions.",
      },
      {
        title: "Data",
        description:
          "Relational schema design in PostgreSQL, document modelling in MongoDB, Redux Toolkit and RTK Query on the client.",
      },
      {
        title: "Delivery",
        description:
          "Git workflows, code review, Agile sprints. Comfortable dropping into an existing codebase and shipping.",
      },
    ] satisfies AboutPanelItem[],
    lede: "I've shipped production code with companies across software services, edtech and financial services — from customer-facing UI in live Next.js codebases to complete business-management platforms built from an empty repo.",
    stats: [
      {
        value: "10+",
        description:
          "Full stacks I work in fluently: MongoDB-based MERN and PostgreSQL-based PERN.",
      },
      {
        value: "15+",
        description:
          "Production applications delivered end to end, from database schema to deployment.",
      },
      {
        value: "Meta",
        description:
          "Front-End Developer Professional Certificate, plus a B.S. in Software Engineering in progress.",
      },
    ] satisfies AboutStat[],
  },

  services: {
    tag: "Services",
    heading: "What I build for clients and teams",
    lede: "Whether you need a single feature shipped inside an existing app or a platform built from scratch, I own the whole stack.",
    ctaLabel: "Get in touch",
  },

  process: {
    tag: "How I work",
    heading: "A process built for shipping",
    lede: "Every project follows the same four steps, whether it takes a week or a quarter.",
  },

  projects: {
    tag: "Selected work",
    heading: "Projects delivered end to end",
    lede: "Production applications built from the first schema to the last component.",
  },

  footer: {
    ctaHeadingLines: ["Let's build", "something"],
    ctaButtonLabel: "Email me on Gmail",
    blurb:
      "Full-stack engineer building websites, web apps, dashboards and custom business systems for clients worldwide.",
    mailtoFallbackLabel: "Or email directly",
    copyright: "Muhammad Taha Sabir",
  },
} as const;

export function gmailLink(subject: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${encodeURIComponent(subject)}`;
}
