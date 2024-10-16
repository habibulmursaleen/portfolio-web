import student from "@/assets/student.png";
import student2 from "@/assets/student2.png";

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

const StudentPortal=()=> {
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
}

export default StudentPortal;

const items = [
  {
    title: "Learning Portal",
    description: "A Student and Admin user management system with features like video upload, quiz creation, assignment submission, dynamic quiz grading, and a student leaderboard.",
    header:  <ProjectImage src={student}/>,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project Structure",
    description: "Here is how I like to structure the code of this project.",
    header: <FrontendFileTree/>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Relevent Links",
    description: "Experience the UI in Live and checkout the code on GitHub.",
    header: <CoolModeLinks previewUrl="https://student-portal-w-rtk-query.netlify.app/" githubUrl="https://github.com/habibulmursaleen/student-portal-w-rtk-query"/>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Powerful Features",
    description:
      "Get a glimpse of the powerful features like video upload, quiz creation, assignment submission, dynamic quiz grading, and a student leaderboard.", 
    header: <ProjectImage src={student2}/>,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];


