import dotnet from "@/assets/dotnet.png";
import nodejs from "@/assets/nodejs.png";
import postgresql from "@/assets/postgresql.png";
import springboot from "@/assets/springboot.png";
import sqlserver from "@/assets/sqlserver.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const SkeletonTwo = () => {
  const [maxWidths, setMaxWidths] = useState<number[]>([]);

  useEffect(() => {
    // Generate random maxWidths for each item
    setMaxWidths(
      Array.from({ length: 5 }, () => Math.random() * (100 - 40) + 40)
    );
  }, []);

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
    textVisible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    textHidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const names = [
    "Node.js",
    ".NET Core",
    "SpringBoot",
    "SQLServer",
    "PostgreSQL",
  ];
  const images = [nodejs, dotnet, springboot, sqlserver, postgresql];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {names.map((name, i) => (
        <motion.div
          key={"skeleton-two-" + i}
          variants={variants}
          style={{
            maxWidth: maxWidths[i] ? `${maxWidths[i]}%` : "40%", // Use calculated value or fallback to a default
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-3 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        >
          <motion.div
            initial="textHidden"
            animate="textVisible"
            whileHover="textVisible"
            className="flex items-center space-x-2"
            variants={{
              textHidden: {
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              },
              textVisible: {
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          >
            <Image
              src={images[i]}
              alt={name}
              className="h-5 w-5 rounded-full object-cover"
            />
            <p className="text-gray-800 font-semibold dark:text-white text-sm">
              {name}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkeletonTwo;
