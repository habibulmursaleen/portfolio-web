import cSharp from "@/assets/cSharp.png";
import javaIcon from "@/assets/javaIcon.png";
import tsIcon from "@/assets/tsIcon.png";
import { motion } from "framer-motion";
import Image from "next/image";

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 p-2 bg-white dark:bg-black rounded-full border border-neutral-100 dark:border-white/[0.2]"
      >
        <Image
          src={tsIcon}
          alt="TypeScript"
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0 object-cover"
        />
        <div className="flex flex-row space-x-1">
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            Next
          </span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            Node.js
          </span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            Azure
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex flex-row items-center space-x-2 p-2 bg-white dark:bg-black rounded-full border border-neutral-100 dark:border-white/[0.2] w-auto ml-auto"
      >
        <div className="flex flex-row space-x-1">
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            React
          </span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            .NET
          </span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            Azure
          </span>
        </div>
        <Image
          src={cSharp}
          alt="C#"
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0 object-cover"
        />
      </motion.div>

      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 p-2 bg-white dark:bg-black rounded-full border border-neutral-100 dark:border-white/[0.2]"
      >
        <Image
          src={javaIcon}
          alt="Java"
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0 object-cover"
        />
        <div className="flex flex-row space-x-1">
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            React
          </span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            Java
          </span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">
            AWS
          </span>
        </div>
      </motion.div>

      {/* <motion.div
        variants={variantsSecond}
        className="flex flex-row items-center space-x-2 p-2 bg-white dark:bg-black rounded-full border border-neutral-100 dark:border-white/[0.2] w-auto ml-auto"
      >
        <div className="flex flex-row space-x-1">
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">React</span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">Node.js</span>
          <span className="bg-gray-200 dark:bg-neutral-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-white">Netlify</span>
        </div>
        <Image
          src={jsIcon}
          alt="JavaScript"
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0 object-cover"
        />
      </motion.div> */}
    </motion.div>
  );
};

export default SkeletonOne;
