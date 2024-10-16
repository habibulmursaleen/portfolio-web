"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef } from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: ReactNode;
}

export const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  disable,
  scale,
  children,
}: {
  rotate?: MotionValue<number>;
  scale?: MotionValue<number>;
  disable?: boolean;
  translate?: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: disable ? 0 : rotate,
        scale: disable ? 1 : scale,
        boxShadow:
          "0 0 0px #4169e080, 0 9px 20px #4169e080, 0 0px 0px #1abc9c1a, 0 84px 50px #1abc9c0d, 0 0px 60px #1abc9c05, 0 0px 0px #1abc9c01",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[48rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-y-auto rounded-xl bg-gray-900 dark:bg-zinc-900 md:rounded-xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
