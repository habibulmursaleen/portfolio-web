import AnimatedTooltip from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";

const library = [
  {
    id: 1,
    name: "React.js",
    designation: "Library",
    image:
      "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png",
  },
  {
    id: 2,
    name: "Next.js",
    designation: "Library",
    image:
      "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
  },
];

const statemanagement = [
  {
    id: 1,
    name: "Redux Toolkit",
    designation: "State management",
    image: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    id: 2,
    name: "React-Query",
    designation: "State management",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png",
  },
];

const tools = [
  {
    id: 1,
    name: "Webpack",
    designation: "Tool",
    image:
      "https://raw.githubusercontent.com/webpack/media/master/logo/icon.png",
  },
  {
    id: 2,
    name: "Vite",
    designation: "Tool",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
  },
  {
    id: 3,
    name: "Cypress",
    designation: "E2E Testing",
    image:
      "https://cdn.sanity.io/images/o0o2tn5x/production/13b9c8412093e2f0cdb5495e1f59144967fa1664-512x512.jpg",
  },
  {
    id: 4,
    name: "RTL",
    designation: "Testing",
    image:
      "https://geops.com/images/blog/migrating-from-enzyme-to-testing-library-react/testing-library.png",
  },
];

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="flex flex-row items-center justify-center mt-1 mr-4  w-full">
          <AnimatedTooltip items={library} />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          React & Next.js with TailwindCSS
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          w/ TypeScript
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center mt-1 mr-4  w-full">
          <AnimatedTooltip items={statemanagement} />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Redux Toolkit, RTK-Queries & React-queries
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          State mangement
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="mt-1 mr-4 flex flex-row items-center justify-center  w-full">
          <AnimatedTooltip items={tools} />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Webpack and Vite with Jest, E2E Test & React Testing Library
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Build-tools and Tests
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SkeletonFour;
