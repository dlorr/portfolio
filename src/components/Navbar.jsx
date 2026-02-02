import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import HamburgerIcon from "./ui/HamburgerIcon";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Get current scroll position
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // Find the active section
      let currentSection = "hero";
      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = item.href.slice(1);
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="text-glow text-foreground">Dlorr</span>
          <span className="ml-1">Portfolio</span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
              <span
                className={cn(
                  "absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300",
                  activeSection === item.href.slice(1)
                    ? "w-full opacity-100"
                    : "w-0 opacity-0",
                )}
              />
            </a>
          ))}

          {/* Theme Toggle (Desktop) */}
          <ThemeToggle />
        </div>

        {/* mobile nav */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle (Mobile - LEFT of hamburger) */}
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-primary z-50 cursor-pointer"
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon open={isMenuOpen} />
          </button>
        </div>

        <div
          className={cn(
            "absolute right-4 top-full mt-3 w-48 rounded-lg border bg-background shadow-lg",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none",
          )}
        >
          <div className="flex flex-col p-2 gap-2">
            {navItems.map((item, key) => {
              return (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors duration-300",
                    activeSection === item.href.slice(1)
                      ? "bg-primary text-primary-foreground font-medium"
                      : "hover:bg-primary/50",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
