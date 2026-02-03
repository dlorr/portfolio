import { cn } from "@/lib/utils";

export default function HamburgerIcon({ open, className }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M4 12H20"
        className={`origin-center transition-all duration-300 ${
          open ? "rotate-45" : ""
        }`}
      />
      <path
        d="M4 12H20"
        className={`origin-center transition-all duration-300 ${
          open ? "opacity-0" : "-translate-y-1.5"
        }`}
      />
      <path
        d="M4 12H20"
        className={`origin-center transition-all duration-300 ${
          open ? "-rotate-45" : ""
        }`}
        style={{ transform: open ? undefined : "translateY(6px)" }}
      />
    </svg>
  );
}
