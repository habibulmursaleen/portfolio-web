import OrbitingCircles from "@/components/ui/orbiting-circles";
 
export default function CleanArchitecture() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Clean Architecture
      </span> */}

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={20}
      >
        Domain
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={70}
         
      >
        Application
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[35px] border-none bg-transparent"
        radius={120}
        duration={20}
        reverse
      >
        Presentation
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[35px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={20}
        reverse
      >
        Infrastructure
      </OrbitingCircles>

     
      
    </div>
  );
}


