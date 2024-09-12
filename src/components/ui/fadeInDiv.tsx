import { cn } from "@/lib/utils";
import { Tab } from "@/types/card";
import { motion } from "framer-motion";

const FadeInDiv = ({
    className,
    tabs,
    hovering,
  }: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
  }) => {
    const isActive = (tab: Tab) => {
      return tab.value === tabs[0].value;
    };
    return (
      <div className="relative w-full h-full">
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn("w-full h-full absolute top-0 left-0", className)}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    );
  };

export default FadeInDiv;