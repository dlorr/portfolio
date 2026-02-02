import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Meteors({ number, className }) {
  const meteors = new Array(number || 10).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor absolute h-0.5 w-0.5 rotate-25 rounded-[9999px] bg-linear-to-r from-white via-white to-transparent shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]",
              "before:absolute before:top-1/2 before:h-px before:w-12.5 before:-translate-y-[50%] before:transform before:bg-linear-to-r before:from-white before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: Math.random() * 20 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 10,
              animationDuration: Math.random() * 3 + 5 + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
}
