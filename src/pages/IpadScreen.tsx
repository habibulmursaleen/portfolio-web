"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SkillGridLayout from "./Skills/SkillGridLayout";

const IpadScreen=()=> {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Over here <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Check this out!!
              </span>
            </h1>
          </>
        }
      >
        <SkillGridLayout />
      </ContainerScroll>
    </div>
  );
}

export default IpadScreen;