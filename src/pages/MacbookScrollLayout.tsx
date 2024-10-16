import marsRover from "@/assets/marsRover.png";
import { LinkPreview } from "@/components/ui/link-preview";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { GoogleAnalytics } from "@next/third-parties/google";
import Badge from "./Components/Badge";

const MacbookScrollLayout = () => {
  return (
    <div className="overflow-hidden dark:bg-black bg-white w-full">
      <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
      <MacbookScroll
        title={
          <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mt-32 mb-10">
            I built a{" "}
            <LinkPreview
              url="https://youtu.be/1A1IkjZbMoo?si=e7YXLbXilHB7GVs5"
              className="font-bold"
            >
              Mars Rover
            </LinkPreview>{" "}
            prototype with a team and competed in{" "}
            <LinkPreview
              url="https://urc.marssociety.org/"
              className="font-bold"
            >
              URC 2019
            </LinkPreview>{" "}
            and placed 18th out of 96 teams worldwide.
          </div>
        }
        badge={<Badge className="h-10 w-10 transform -rotate-12" />}
        src={marsRover}
        showGradient={false}
      />
    </div>
  );
};

export default MacbookScrollLayout;
