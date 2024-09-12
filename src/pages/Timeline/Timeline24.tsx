import {
  IconBriefcase
} from "@tabler/icons-react";
import ExpandableCardList from "./ExpandableComponents/ExpandableCardList";

const timeline24Content = [
  {
    description: "April 2024 - Present @Full-time",
    title: "Developer @Kapital Kontroll",
    src: () => {
      return <IconBriefcase size={32}  />;
    },
    cover: () => {
      return <IconBriefcase size={250}  />;
    },
    ctaText: "More",
    ctaLink: "https://www.kapitalkontroll.no/",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <div className="mb-4">
            <p>
            Currently working as a Developer at Kapital Kontroll, a financial technology 
            company that provides SAAS solutions for financial institutions and norwegian municipalities.
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              Capable of managing the full lifecycle of frontend development, from initial use case, Figma design, implementations, end-to-end test, and finally CI-CD deployment on Azure.
            </li>
            <li>
              Good knowledge to perform backend API development while needed, utilizing Domain-driven-Design (DDD) with clean architecture and Entity framework with Azure Services.
            </li>
            <li>
              Proficient in working with Azure DevOps, Git, and Jira for project management and version control.
            </li>
          </ul>
        </div>
      );
    },
  },
];

const Timeline24 = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ExpandableCardList cards={timeline24Content} />
    </div>
  );
};

export default Timeline24;
