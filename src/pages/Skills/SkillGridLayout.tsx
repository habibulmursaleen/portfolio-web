"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import SkillCloud from "../SkillCloud";
import SkeletonFour from "./SkeletonFour";
import SkeletonOne from "./SkeletonOne";
import SkeletonThree from "./SkeletonThree";
import SkeletonTwo from "./SkeletonTwo";

const skillsComponents = [
  {
    title: "Experienced Tech Stacks",
    description: (
      <span className="text-sm">Worked in industry standard projects.</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Backend Development",
    description: (
      <span className="text-sm">
        Working and implementing backend services with Clean Architechture and
        Domain Driven Design.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "DevOps",
    description: (
      <span className="text-sm">
        Experience with cloud services like Microsft Azure.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Frontend Development",
    description: (
      <span className="text-sm">
        Developer with a heart for frontend technologies.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

const SkillGridLayout = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
      <SkillCloud />
      {skillsComponents.map((skillsComponent, i) => (
        <BentoGridItem
          key={i}
          title={skillsComponent.title}
          description={skillsComponent.description}
          header={skillsComponent.header}
          className={cn("[&>p:text-lg]", skillsComponent.className)}
          icon={skillsComponent.icon}
        />
      ))}
    </BentoGrid>
  );
};

export default SkillGridLayout;
