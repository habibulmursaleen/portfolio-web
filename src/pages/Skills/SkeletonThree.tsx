import azure from "@/assets/azure.png";
import docker from "@/assets/docker.png";
import { motion } from "framer-motion";
import Image from "next/image";

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full flex items-center justify-center rounded-lg">
        <Image src={azure} alt="Profile" className="h-24 w-24 object-cover" />
        <Image src={docker} alt="Profile" className="h-24 w-24 object-cover" />
      </motion.div>
    </motion.div>
  );
};

export default SkeletonThree;
