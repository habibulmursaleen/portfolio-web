import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";
import { LinkPreview } from "@/components/ui/link-preview";
import { Fullscreen, Github } from "lucide-react";

const CoolModeLinks=({previewUrl, githubUrl}:{previewUrl:string, githubUrl:string})=> {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col w-32 items-center gap-6 relative justify-center">
        <LinkPreview
          url={previewUrl}
          className="font-bold w-full"
        >
          <CoolMode>
          <Button className="w-full"> <Fullscreen className="mr-1" /> Live Preview </Button>
          </CoolMode>
        </LinkPreview>
        
        <CoolMode>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
        <Button className="w-full">
          <Github className="mr-1" /> GitHub
        </Button>
      </a>
    </CoolMode>
        </div>
      </div>
    );
  }

  export default CoolModeLinks;
  