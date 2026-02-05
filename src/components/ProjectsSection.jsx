import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Tabs } from "./ui/Tabs";
import { motion } from "motion/react";

export default function ProjectsSection() {
  const tabs = projects.map((project) => ({
    value: project.id,
    title: project.title,
    content: (
      <div className="gradient-card rounded-lg overflow-hidden shadow-lg max-w-5xl bg-card">
        <div className="h-80 md:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium border rounded-full text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm md:text-base mb-4">
            {project.description}
          </p>

          <div className="flex space-x-6 justify-center">
            {[
              { Icon: ExternalLink, label: "Visit Website" },
              { Icon: Github, label: "Visit Github Repository" },
            ].map(({ Icon, label }, i) => (
              <motion.a
                key={i}
                href="#"
                target="_blank"
                className="group relative text-muted-foreground hover:text-primary transition-colors"
                whileHover={{
                  y: -10,
                  scale: 1.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 18,
                }}
              >
                <Icon />

                {/* Tooltip */}
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all text-xs bg-background/80 backdrop-blur px-2 py-1 rounded shadow whitespace-nowrap">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured
          <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, showcasing my work as a Fullstack
          Developer. Each project is built with focus on performance, usability,
          and seamless user experience.
        </p>

        <Tabs tabs={tabs} />

        <div className="text-center mt-12">
          <a
            href="https://github.com/dlorr"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
