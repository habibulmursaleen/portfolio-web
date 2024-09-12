import {
  IconLicense,
  IconSchool
} from "@tabler/icons-react";
import ExpandableCardList from "./ExpandableComponents/ExpandableCardList";

const Early23Cards = [
  {
    description: "University of South-Eastern Norway @Graduate 2023",
    title: "Master's Degree @Computer Science",
    src: () => {
      return <IconSchool size={32}  />;
    },
    cover: () => {
      return <IconSchool size={250}  />;
    },
    ctaText: "More",
    ctaLink: "https://www.usn.no/",
    content: () => {
      return (
        <div className="max-h-64 overflow-y-auto [scrollbar-width:none]">
          <p>
            Through my 2 years study, I gained in-depth knowledge of advanced topics like algorithms, 
            data analysis, AI, and semantic search. I also developed strong skills in research, 
            problem-solving, and system development. This program has prepared me for the industry by 
            honing my critical thinking and giving me hands-on experience with modern tools and technologies. 
            It has equipped me to tackle complex challenges and contribute to innovative software development 
            and enterprise solutions.
          </p>
        </div>
         
      );
    },
  },
  {
    description: "Semantic Search on Equipment",
    title: "Master's Thesis",
    src: () => {
      return <IconLicense size={32}  />;
    },
    cover: () => {
      return <IconLicense size={250}  />;
    },
    ctaText: "Read",
    ctaLink: "https://openarchive.usn.no/usn-xmlui/handle/11250/3074094",
    content: () => {
      return (
        <p>
          This master&apos;s thesis investigates semantic search on heterogeneous documents 
          in an enterprise context by exploring two approaches: RDF ontology with RML and entity 
          extraction with vector embeddings. <br /> <br /> The first experiment uses vector embeddings to 
          transform documents into high-dimensional vectors for similarity-based search, targeting
          structured formats like CSV and Excel. The second experiment employs RDF ontology with 
          RML and SPARQL queries to handle both structured and unstructured formats, demonstrating
          superior semantic representation and querying capabilities. The thesis concludes that the
          RDF ontology approach is more effective and suggests future research on combining it with
          vector embeddings for a more powerful semantic search solution.
        </p>
      );
    },
  },
];

const Early23 = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ExpandableCardList cards={Early23Cards} />
    </div>
  );
};

export default Early23;
