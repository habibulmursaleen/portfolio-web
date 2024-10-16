"use client";

import api from "@/assets/api.png";
import application from "@/assets/application.png";
import domain from "@/assets/domain.png";
import infrastructure from "@/assets/infrastructure.png";

import { Database } from 'lucide-react';

import React, { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import ProjectImage from "./ProjectImage";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function NorskApiDataflow({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const database = useRef<HTMLDivElement>(null);
  const infrastructureLayer = useRef<HTMLDivElement>(null);
  const domainLayer = useRef<HTMLDivElement>(null);
  const applicationLayer = useRef<HTMLDivElement>(null);
  const apiLayer = useRef<HTMLDivElement>(null);
   const user = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex w-full max-w-lg flex-row justify-around items-center gap-10">
 
  <div className="flex flex-col justify-center gap-8">
  <Circle ref={database} className="size-16">
      <Database className="text-black" />
    </Circle>
    <Circle ref={infrastructureLayer} className="size-16">
      <ProjectImage src={infrastructure}/>
    </Circle>
  </div>
   
  <div className="flex justify-center">
  <Circle ref={domainLayer} className="size-16">
      <ProjectImage src={domain}/>
    </Circle>
  </div>
  <div className="flex justify-center">
  <Circle ref={applicationLayer} className="size-16">
      <ProjectImage src={application}/>
    </Circle>
  </div>
  <div className="flex flex-col justify-center">
     
    <Circle ref={apiLayer} className="size-16">
      <ProjectImage src={api}/>
    </Circle>
  </div>
  <div className="flex justify-center">
    <Circle ref={user} className="size-16">
      <Icons.user />
    </Circle>
  </div>
</div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={database}
        toRef={infrastructureLayer}
      />

<AnimatedBeam
        containerRef={containerRef}
        fromRef={infrastructureLayer}
        toRef={domainLayer}
      />

<AnimatedBeam
        containerRef={containerRef}
        fromRef={domainLayer}
        toRef={applicationLayer}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={applicationLayer}
        toRef={apiLayer}
      />
    
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={apiLayer}
        toRef={user}
      />
      
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
