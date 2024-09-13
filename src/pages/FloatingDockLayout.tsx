"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FloatingDock } from "@/components/ui/floating-dock";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  IconAddressBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconTerminal2,
  IconTimelineEventText,
} from "@tabler/icons-react";
import { FolderGit2 } from "lucide-react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#home",
  },
  {
    title: "Skills",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Projects",
    icon: (
      <FolderGit2 className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Timeline",
    icon: (
      <IconTimelineEventText className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#timeline",
  },
  {
    title: "Contact",
    icon: (
      <IconAddressBook className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#",
    link: "https://no.linkedin.com/in/habibulmursaleen",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#",
    link: "https://github.com/habibulmursaleen",
  },
];

const FloatingDockLayout = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 mb-10">
      <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
      <BackgroundGradient>
        <FloatingDock items={links} />
      </BackgroundGradient>
    </div>
  );
};

export default FloatingDockLayout;
