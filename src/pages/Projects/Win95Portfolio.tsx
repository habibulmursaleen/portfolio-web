import frontpage from "@/assets/frontpage.png";
import openpage from "@/assets/openpage.png";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import CoolModeLinks from "../common/CoolModeLinks";
import ProjectImage from "./ProjectImage";

const Win95Portfolio = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[25rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          projectTitle={true}
        />
      ))}
    </BentoGrid>
  );
};

export default Win95Portfolio;

const items = [
  {
    title: "Windows 95 Theme Portfolio",
    description:
      "A fun portfolio website with Windows 95 theme. It has a start menu, taskbar, and windows that can be opened and closed.",
    header: <ProjectImage src={openpage} />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Start Menu",
    description: "Functional start menu with a list of projects and a search bar.",
    header: <ProjectImage src={frontpage} />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Relevent Links",
    description: "Experience the UI in Live and checkout the code on GitHub.",
    header: (
      <CoolModeLinks
        previewUrl="https://win95-porfolio-mursaleen.netlify.app/"
        githubUrl="https://github.com/habibulmursaleen/win95-porfolio"
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Meme Features",
    description:
      "Funny memes and jokes that can be opened in a window.",
    header: <ProjectImage src={frontpage} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
