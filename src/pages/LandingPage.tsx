"use client";

import BoxReveal from "@/components/ui/box-reveal";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="h-[85vh] flex lg:justify-center">
      <div className="flex items-center justify-center h-screen max-w-2xl overflow-hidden">
        <div className="sm:pt-24 mx-auto w-auto p-4 sm:p-6 lg:p-10">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-left">
              S M Habibul Mursaleen Chowdhury
              <span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 text-left">
              <h1>
                Developer at
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Kapital Kontroll
                </span>
              </h1>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 text-left">
              <p>
                I build web applications with
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Typescript
                </span>
                ,<span className="font-semibold text-[#5046e6]"> .NET</span>,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Azure Services
                </span>
                , and follow
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Clean Architecture
                </span>{" "}
                with
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Domain Driven Design
                </span>{" "}
                pattern.
              </p>
            </div>
          </BoxReveal>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </div>
  );
}
