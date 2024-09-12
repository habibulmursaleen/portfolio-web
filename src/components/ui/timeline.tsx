"use client";
import Early23 from "@/pages/Timeline/Early23";
import Late2023 from "@/pages/Timeline/Late2023";
import Timeline1920 from "@/pages/Timeline/Timeline1920";
import Timeline2122 from "@/pages/Timeline/Timeline2122";
import Timeline24 from "@/pages/Timeline/Timeline24";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TimelineLayout = [
  {
    title: "2024",
    content: <Timeline24 />,
  },
  {
    title: "Late 2023",
    content: <Late2023 />,
  },
  {
    title: "Early 2023",
    content: <Early23 />,
  },
  {
    title: "2021-2022",
    content: <Timeline2122 />,
  },
  {
    title: "2019-2020",
    content: <Timeline1920 />,
  },
];

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full">
      <div
        className="w-full bg-white dark:bg-black font-sans md:px-10"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 via-neutral-700 to-neutral-700 dark:from-neutral-700 dark:via-white dark:to-white z-20">
            Last 5 years in a nutshell!
          </h1>
          <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg mt-10">
            I&apos;d been living in Dhaka, Bangladesh for all my life until I decided to explore more outside the country.
            Here&apos;s a overview of what I&apos;ve been doing on my journey from Dhaka to Oslo.
          </div>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
          {TimelineLayout.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;