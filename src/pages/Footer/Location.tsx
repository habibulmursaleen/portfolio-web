"use client";
import osloMap from "@/assets/osloMap.jpg";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

const Location=()=> {
  return (
    <div className="relative h-[40rem] w-full flex items-center justify-center z-10">
      <PinContainer
        title="I am here"
        href="https://no.linkedin.com/in/habibulmursaleen"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Oslo, Norway
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              lets grab a coffee and talk about your project
            </span>
          </div>
          <Image
            src={osloMap}
            alt="Map of Oslo"
            width={300}
            height={300}
            // objectFit="cover"
            className="absolute bottom-0 rounded-md w-full h-52 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </PinContainer>
    </div>
  );
}

export default Location;