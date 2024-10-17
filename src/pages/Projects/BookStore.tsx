import book from "@/assets/book.jpeg";
import book2 from "@/assets/book2.png";
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

const BookStore = () => {
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

const items = [
  {
    title: "Book Store",
    description: "Explore the interactive and user-friendly Book Store.",
    header: <ProjectImage src={book2} />,
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
        previewUrl="https://bookstore-w-rtk-query.netlify.app/"
        githubUrl="https://github.com/habibulmursaleen/bookstore-w-rtk-query"
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Online Store",
    description:
      "Get a glimpse of the powerful store, visualizing books overview, price, and details.",
    header: <ProjectImage src={book} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default BookStore;
