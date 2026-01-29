import ThemeToggle from "@/components/ThemeToggle";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Background effects */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
}
