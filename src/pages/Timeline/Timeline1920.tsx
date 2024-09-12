import {
  IconBriefcase,
  IconLicense,
  IconSchool
} from "@tabler/icons-react";
import ExpandableCardList from "./ExpandableComponents/ExpandableCardList";

const timeline1920cards = [
  {
    description: "American International University-Bangladesh (AIUB), @Graduate 2019",
    title: "Bachelor's Degree @Computer Science & Engineering",
    src: () => {
      return <IconSchool size={32}  />;
    },
    cover: () => {
      return <IconSchool size={250}   />;
    },
    ctaText: "More",
    ctaLink: "https://www.aiub.edu/",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <div className="mb-4">
            <p>
              I earned 4-year Bachelor&apos;s program in Computer Science under the
              Faculty of Science and Technology at AIUB. I was not only gained
              comprehensive understanding in academics but also deeply involved
              in extracurricular activities, which led me to achieve these key
              accomplishments:
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>University Rover Challenge (URC 2019, USA) </li>
            <li>Deans List Awards</li>
            <li>Scholarships from AIUB</li>
            <li>Executive Member of IEEE AIUB Student Branch </li>
            <li>Dr. Anwarul Abedin’s Leadership Award</li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "August 2019 - February 2020 @Internship",
    title: "Intern @a2i Innovation Lab",
    src: () => {
      return <IconBriefcase size={32}  />;
    },
    cover: () => {
      return <IconBriefcase size={250}  />;
    },
    ctaText: "More",
    ctaLink: "https://ilab.gov.bd/",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <div className="mb-4">
            <p>
              Worked as an intern in Research and Development at the Innovation
              Lab (iLab) under the Ministry of Bangladesh Information and
              Communication Technology (ICT) Division.
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 pl-5">
            <li>
              Worked with HTML, CSS, and JavaScript, ensuring responsive designs
              across various devices and platforms.
            </li>
            <li>
              Assisted in the deployment of digital solutions and provided
              technical support during the initial stages of implementation,
              ensuring a smooth transition from traditional to digital
              government services.
            </li>
            <li>
              Identified pain points in existing government services and
              designed solutions using data-driven approaches.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "Blockchain Based Decentralisation  @ACM Digital Library",
    title: "Bachelor's Thesis & Publication",
    src: () => {
      return <IconLicense size={32}  />;
    },
    cover: () => {
      return <IconLicense size={250}  />;
    },
    ctaText: "Read",
    ctaLink: "https://dl.acm.org/doi/10.1145/3377049.3377083",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <p><strong></strong></p>
          <p>
            Throughout this paper, we try to describe with blockchain technology
            the decentralization of the internet. A decentralized network that
            encourages the internet to operate from the smartphone or tablet of
            anybody instead of centralized servers. A decentralized
            implementation would be based on a peer-to-peer network that is
            dependent on a user community. Their machines connected to the
            internet will host the network, not a community of more powerful
            servers. Each site would be distributed across thousands of nodes on
            various devices. The data is therefore not contained, owned by
            private storage facilities. There is therefore no central point to
            hack, and no way for an oligarchy of entities to take control of it.
            A proposed alternative was formed based on a systematic literature
            review that demonstrates that Internet decentralization is what this
            modern technology needs in order to address not only the weaknesses
            of current servers including server down issue, hacking and data
            manipulation or single point of failure, but also to prevent
            companies from monetizing the data of citizens through their server
            and to market them to the advertisers.
          </p>
        </div>
      );
    },
  },
];

const Timeline1920 = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ExpandableCardList cards={timeline1920cards} />
    </div>
  );
};

export default Timeline1920;
