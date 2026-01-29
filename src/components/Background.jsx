import Meteors from "./ui/Meteors";
import StarsBackground from "./ui/StarsBackground";
import ShootingStars from "./ui/ShootingStars";

export default function StarBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <StarsBackground />
      <ShootingStars />
      <Meteors number={10} />
    </div>
  );
}
