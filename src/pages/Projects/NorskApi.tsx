import norskapi from "@/assets/norskapi.png";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import BackendFileTree from "./BackendFileTree";
import CleanArchitecture from "./CleanArchitecture";
import NorskApiDataflow from "./NorskApiDataflow";
import ProjectImage from "./ProjectImage";

const NorskApi = () => {
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

export default NorskApi;

const items = [
  {
    title: "Backend API for Norsk",
    description:
      "Created with .NET Core, this API is used to manage projects and tasks for the Norsk project management application.",
    header: <NorskApiDataflow />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project Structure",
    description:
      "See how the project is organized and structured in the context of Clean Architecture and Domain Driven Design principles.",
    header: <BackendFileTree />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Architecture",
    description:
      "This project is built using the principles of Clean Architecture and Domain Driven Design.",
    header: <CleanArchitecture />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Domain layer",
    description:
      "Understand the business rules and logic that govern the application with Aggregates, Entities, and Value Objects.",
    header: <ProjectImage src={norskapi} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
