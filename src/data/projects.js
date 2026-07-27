import project1 from "@/assets/images/projects/project1.png";
import aegis from "@/assets/images/projects/aegis.png";
import projectlume from "@/assets/images/projects/projectlume.png";
import financeos from "@/assets/images/projects/financeos.png";

export const projects = [
  {
    id: 1,
    title: "Aegis",
    description:
      "A full-stack JWT authentication system built with React, TypeScript, Express, and MongoDB. Features secure login, registration, email verification, password recovery, and multi-device session management.",
    image: aegis,
    tags: [
      "React.js",
      "Express.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/dlorr/jwt-auth-login",
  },
  {
    id: 2,
    title: "Project Lume",
    description:
      "A full-stack Kanban project management app built with Vue 3, NestJS, and PostgreSQL. Features customizable boards, ticket tracking, team collaboration with role-based permissions, and JWT authentication.",
    image: projectlume,
    tags: [
      "Vue.js",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/dlorr/project-lume",
  },
  {
    id: 3,
    title: "FinanceOS",
    description:
      "A personal finance dashboard built with Nuxt 3, Vue, and TypeScript. Visualizes income, expenses, and savings with interactive charts and a transaction table.",
    image: financeos,
    tags: ["Nuxt 3", "Vue.js", "TypeScript", "Pinia", "SCSS", "ApexCharts"],
    demoUrl: "#",
    githubUrl: "https://github.com/dlorr/finance-dashboard",
  },
];
