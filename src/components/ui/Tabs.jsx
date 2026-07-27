"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-wrap justify-center gap-4 mb-12",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
              active.value === tab.value
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-primary/20",
              tabClassName,
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="active-tab"
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                style={{
                  borderRadius: 9999,
                }}
                className={cn(
                  "absolute inset-0 bg-primary",
                  activeTabClassName,
                )}
              />
            )}

            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-8", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full min-h-100 sm:min-h-125 md:min-h-150">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.05,
            top: hovering ? idx * -40 : 0,
            zIndex: tabs.length - idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
          className={cn("w-full absolute left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
