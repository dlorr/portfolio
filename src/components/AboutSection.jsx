import { useToast } from "@/hooks/use-toast";
import { Code, Layers, Monitor, Server } from "lucide-react";

export default function AboutSection() {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    setTimeout(() => {
      toast({
        title: "CV Download Started!",
        description:
          "Check your browser’s downloads if it doesn’t start automatically.",
      });
    }, 1500);
  };
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Fullstack Developer
            </h3>

            <p className="text-muted-foreground">
              With 3 years of experience as a Fullstack Developer, I build web
              applications from frontend interfaces to backend logic. I focus on
              crafting interactive, performant, and visually engaging
              applications that bring ideas to life.
            </p>

            <p className="text-muted-foreground">
              Passionate about clean code, elegant design, and smooth
              animations, I continuously explore new technologies to keep my
              projects innovative and engaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/test-download-cv.pdf"
                download="test-download-cv.pdf"
                onClick={handleSubmit}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend</h4>
                  <p className="text-muted-foreground">
                    Crafting interactive and responsive user interfaces that
                    provide seamless and engaging experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend</h4>
                  <p className="text-muted-foreground">
                    Developing robust server-side systems, managing databases,
                    and creating APIs that power seamless applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Fullstack Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Connecting frontend and backend, integrating services, and
                    ensuring scalable, end-to-end solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
