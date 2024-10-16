import Timeline from "@/components/ui/timeline";
import { GoogleAnalytics } from "@next/third-parties/google";
import BoxRevealDemo from "./BoxRevealDemo";
import FloatingDockLayout from "./FloatingDockLayout";
import FooterBackground from "./Footer/FooterBackground";
import IpadScreen from "./IpadScreen";
import MacbookScrollLayout from "./MacbookScrollLayout";
import ProjectTabs from "./Projects/ProjectTabs";
import ScrollBasedVelocity from "./ScrollBasedVelocity";

const Home = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
      <div id="home">
        <BoxRevealDemo />
        <ScrollBasedVelocity />
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
