import Timeline from "@/components/ui/timeline";
import { GoogleAnalytics } from "@next/third-parties/google";
import FloatingDockLayout from "./FloatingDockLayout";
import FooterBackground from "./Footer/FooterBackground";
import InfiniteMovingCardsLayout from "./InfiniteMovingCards";
import IpadScreen from "./IpadScreen";
import MacbookScrollLayout from "./MacbookScrollLayout";
import ProjectTabs from "./ProjectTabs";
import SparklesPreview from "./SparklesPreview";

const Home = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
      <div id="home">
        <InfiniteMovingCardsLayout />
        <SparklesPreview />
      </div>
      <div id="skills">
        <IpadScreen />
      </div>
      <div id="projects">
        <ProjectTabs />
        <MacbookScrollLayout />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="contact">
        <FooterBackground />
      </div>
      <FloatingDockLayout />
    </>
  );
};

export default Home;
