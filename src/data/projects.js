import project1 from "@/assets/images/projects/project1.png";
import aegis from "@/assets/images/projects/aegis.png";

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
    title: "Project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam hic eos illum officia.",
    image: project1,
    tags: ["React.js", "Tailwind CSS", "Express.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam hic eos illum officia.",
    image: project1,
    tags: ["React.js", "Tailwind CSS", "Express.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
