import ecom1 from "@/assets/ecom1.png";
import ecom2 from "@/assets/ecom2.png";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import CoolModeLinks from "../common/CoolModeLinks";
import FrontendFileTree from "./FrontendFileTree";
import ProjectImage from "./ProjectImage";

const EcommercePortal = () => {
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

export default EcommercePortal;

const items = [
  {
    title: "E-Commerce Portal",
    description: "Explore the interactive and user-friendly E-Commerce Portal.",
    header: <ProjectImage src={ecom1} />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project Structure",
    description: "Here is how I like to structure the code of this project.",
    header: <FrontendFileTree />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Relevent Links",
    description: "Experience the UI in Live and checkout the code on GitHub.",
    header: (
      <CoolModeLinks
        previewUrl="https://ecommerce-dashboard-applicatin.netlify.app/"
        githubUrl="https://github.com/habibulmursaleen/E-commerce-Dashboard"
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Powerful Dashboard",
    description:
      "Get a glimpse of the powerful dashboard, visualizing sales overviews, revenue, recent orders, and more.",
    header: <ProjectImage src={ecom2} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
