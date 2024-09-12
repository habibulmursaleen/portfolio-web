import {
  IconBriefcase,
  IconPackageExport
} from "@tabler/icons-react";
import ExpandableCardList from "./ExpandableComponents/ExpandableCardList";

const Late23Cards = [
  {
    description: "June 2023 - August 2023  @Summer Job",
    title: "Developer @BankId BankAxcept Stø ",
    src: () => {
      return <IconBriefcase size={32}  />;
    },
    cover: () => {
      return <IconBriefcase size={250}  />;
    },
    ctaText: "More",
    ctaLink: "https://bankid.no/en/identity-check-with-passport",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <div className="mb-4">
            <p>
              Worked in the ID Check Team. Digital identification service in
              Norway, aims to serve millions, providing secure and efficient
              remote ID verification for banking purposes.
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              Involved in shaping digital services aimed at mitigating identity
              theft risk for leading banks in Norway.
            </li>
            <li>
              Contributed to a TypeScript-based portal aimed at efficiently
              managing banking regulations, statistics, and historical data
              representation related to ID checks following component-based
              modular approach.
            </li>
            <li>
              Utilized Next.js to incorporate Server-Side Rendering (SSR) and
              react-queries to advanced data handling, enhancing performance and
              user experience.
            </li>
            <li>
              Implemented RestAPIs with test functionalities and utilized CI/CD
              pipelines, docker, and Azure devOps ensuring best development
              practices with industry-standard code and delivering reliable
              scalable features.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "September 2023 - October 2023  @Internship",
    title: "Frontned Developer @VPS Decarbonization ",
    src: () => {
      return <IconBriefcase size={32}  />;
    },
    cover: () => {
      return <IconBriefcase size={250}  />;
    },
    ctaText: "More",
    ctaLink: "https://www.vpsveritas.com/digital-decarbonisation",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <div className="mb-4">
            <p>
              Worked in Maress - Maritime project, a fleet management system
              enabling real-time performance insights for decarbonization.
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              Delivered meaningful features to clients’ projects that saved
              significant amount of CO2 emissions.
            </li>
            <li>
              Developed full-stack Java and React features for maritime
              applications, empowering real-time tracking, monitoring, and
              performance insights for fleet management, vital for
              decarbonization efforts.
            </li>
            <li>
              Re-implemented some legacy features to enhance efficiency and
              scalability using jQueries on fleet operations resulting in high
              satisfaction among fleet managers.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "NPM Package @Over 900+ downloads",
    title: "Open Source Contribution",
    src: () => {
      return <IconPackageExport size={32}  />;
    },
    cover: () => {
      return <IconPackageExport size={250}  />;
    },
    ctaText: "More",
    ctaLink: "https://www.npmjs.com/package/@chowdhury/vite-react-redux-ts-starter",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <p className="mb-5">
            A minimalistic Vite-based starter template for building React applications with TypeScript. 
            This starter kit provides a well-configured development environment and includes essential 
            tools and shadcn/ui libraries for efficiently developing and maintaining your React projects.

            <br /> <br /> 

            Use the following command to create a new project using this package:
          </p>
    
          <pre className="bg-gray-900   p-4 rounded-md text-sm whitespace-pre-wrap">
            <code>
              npx @chowdhury/vite-react-redux-ts-starter my-app{'\n'}
              cd my-app{'\n'}
              rm rf .git{'\n'}
              npm install{'\n'}
              npm run dev
            </code>
          </pre>
        </div>
      );
    },
  },
];

const Late2023 = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ExpandableCardList cards={Late23Cards} />
    </div>
  );
};

export default Late2023;
