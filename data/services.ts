export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Web application development",
    description:
      "Full-stack React, Next.js and Node.js applications with authentication, authorization and a relational or document database.",
  },
  {
    title: "Dashboards & admin platforms",
    description:
      "Business-management systems covering inventory, orders, purchases, receipts, reporting and audit logging.",
  },
  {
    title: "Frontend engineering",
    description:
      "Component-driven, responsive interfaces in TypeScript, integrated cleanly with REST APIs in live production codebases.",
  },
  {
    title: "API & database design",
    description:
      "REST API architecture, PostgreSQL schemas with Row Level Security, MongoDB data models, and secure JWT-based auth.",
  },
];
