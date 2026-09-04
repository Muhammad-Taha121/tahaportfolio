export type Solution = {
  title: string;
  description: string;
  tags: string[];
};

export type SolutionsStripColumn = {
  title: string;
  description: string;
};

export const solutions = {
  tag: "Solutions",
  heading: "Whatever your business needs on the web, I can build it",
  lede: "From a single landing page to a complete internal system, I design and build custom software for clients worldwide — and I handle everything from the first wireframe to the deployed product.",
  ctaLabel: "Discuss this project",
  items: [
    {
      title: "Business websites",
      description:
        "Fast, responsive marketing sites and landing pages that load quickly, rank well and convert visitors into enquiries.",
      tags: ["Next.js", "SEO", "CMS-ready", "Analytics"],
    },
    {
      title: "Portfolio & personal brand sites",
      description:
        "Polished portfolios for founders, consultants, designers and agencies that make a strong first impression.",
      tags: ["Custom design", "Animations", "Contact integration"],
    },
    {
      title: "E-commerce stores",
      description:
        "Online stores with product catalogues, carts, secure checkout, order management and an admin panel for stock and sales.",
      tags: ["Cart & checkout", "Payments", "Inventory", "Admin panel"],
    },
    {
      title: "Dashboards & analytics",
      description:
        "Data dashboards with charts, filters, reporting and role-based access so teams can see what matters at a glance.",
      tags: ["Charts", "Reporting", "Role-based access", "Forecasting"],
    },
    {
      title: "CRM & management systems",
      description:
        "Custom systems for clients, orders, purchases, inventory, receipts and audit trails, built around how your business actually works.",
      tags: ["PostgreSQL", "Row Level Security", "Audit logging", "Reports"],
    },
    {
      title: "Web apps & SaaS products",
      description:
        "Full-stack products with authentication, subscriptions, user roles and APIs, ready to scale from first user to thousands.",
      tags: ["Auth", "Multi-role", "REST APIs", "MongoDB / PostgreSQL"],
    },
    {
      title: "UI/UX design",
      description:
        "Wireframes, user flows and high-fidelity interface design, then built pixel-accurately in code — one person, no handoff gap.",
      tags: ["Wireframes", "Prototypes", "Design systems", "Implementation"],
    },
    {
      title: "Custom software solutions",
      description:
        "Have a problem that doesn't fit a template? I scope it, architect it and build it — internal tools, automations, integrations, or something entirely new.",
      tags: ["Discovery call", "Fixed scope", "Worldwide"],
    },
  ] satisfies Solution[],
  strip: [
    {
      title: "Who I work with",
      description:
        "Startups, small and mid-size businesses, agencies and solo founders, anywhere in the world.",
    },
    {
      title: "How engagements work",
      description:
        "Fixed-scope projects with clear milestones, or ongoing development for teams that need a reliable engineer.",
    },
    {
      title: "Where",
      description:
        "Based in Lahore, working remotely across every time zone. Communication over email, Slack or WhatsApp.",
    },
  ] satisfies SolutionsStripColumn[],
};
