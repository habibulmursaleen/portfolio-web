import { HoverEffectSlim } from "@/components/ui/card-hover-effect-slim";
import { IconBriefcase } from "@tabler/icons-react";
import ExpandableCardList from "./ExpandableComponents/ExpandableCardList";

const timeline2020Jobcard = [
  {
    description: "December 2020 - July 2021 @Full-time (Until moved to Norway)",
    title: "Software Engineer @Nano Information Technology",
    src: () => {
      return <IconBriefcase size={32} />;
    },
    cover: () => {
      return <IconBriefcase size={250} />;
    },
    ctaText: "More",
    ctaLink: "https://www.nanoit.biz/",
    content: () => {
      return (
        <div className="max-h-64 sm:h-auto overflow-y-auto [scrollbar-width:none]">
          <div className="mb-4">
            <p>
              Worked as a Software Engineer in a team of 15 members. Nano IT is
              a software development company that provides custom software
              solutions to various clients.
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              Implemented responsive and reusable layouts using React,
              Bootstrap, and CSS, ensuring seamless user experiences.
            </li>
            <li>
              Worked closely with the UX to translate wireframes and mockups
              into interactive and user-friendly interfaces.
            </li>
            <li>
              Worked on Agile to manage the development workflow efficiently and
              maintain a steady pace of delivery.
            </li>
          </ul>
        </div>
      );
    },
  },
];

const timeline2122Content = [
  {
    title: "Moved to Norway",
    description:
      "In August 2021, I moved to Kongsberg, Norway to pursue my masters degree.",
  },
  {
    title: "Master's Degree",
    description:
      "Started my Masters in Computer Science at University of South-Eastern Norway.",
    link: "https://www.usn.no/",
  },
];

const Timeline2122 = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        <HoverEffectSlim items={timeline2122Content} />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <ExpandableCardList cards={timeline2020Jobcard} />
      </div>
    </div>
  );
};

export default Timeline2122;
