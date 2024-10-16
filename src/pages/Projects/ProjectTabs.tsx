"use client";

import { Card } from "@/components/ui/container-scroll-animation";
import { LinkPreview } from "@/components/ui/link-preview";
import Tabs from "@/components/ui/tabs";
import TextReveal from "@/components/ui/text-reveal";
import { GoogleAnalytics } from "@next/third-parties/google";
import BookStore from "./BookStore";
import EcommercePortal from "./EcommercePortal";
import NorskApi from "./NorskApi";
import StudentPortal from "./StudentPortal";

const tabs = [
  {
    title: "Norsk Api",
    value: "norskapi",
    content: (
      <Card disable>
        <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
          <NorskApi/>
      </Card>

    ),
  },
  {
    title: "E-Commerce Portal",
    value: "ecommerce",
    content: (
      <Card disable>
        <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
          <EcommercePortal/>
      </Card>
    ),
  },
  {
    title: "Book Store",
    value: "bookstore",
    content: (
      <Card disable>
        <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
          <BookStore/>
      </Card>
    ),
  },
  {
    title: "Student Portal",
    value: "StudentPortal",
    content: (
      <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black drop-shadow-2xl overflow-y-visible">
         <Card disable>
        <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
          <StudentPortal/>
      </Card>
        
       </div>
      
    ),
  }
  
];

const ProjectTabs = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-RE5M7ZL6T3" />
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h1 className="text-6xl md:text-6xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-800 to-neutral-300 dark:from-neutral-200 dark:via-white dark:to-white z-20">
          <TextReveal className='text-6xl md:text-6xl lg:text-6xl' text="Wondering what I have been working on!" /> 
        </h1>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg mt-10">
          There are over{" "}
          <LinkPreview
            url="https://github.com/habibulmursaleen?tab=repositories"
            className="font-bold"
          >
            50 projects
          </LinkPreview>{" "}
          including backend API using Spring Boot, .NET Core, FastAPI, and
          frontend projects with like React, Next, Redux. Please do check out my{" "}
          <LinkPreview
            url="https://github.com/habibulmursaleen"
            className="font-bold"
          >
            GitHub
          </LinkPreview>{" "}
          page for details.
        </div>
      </div>
       <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default ProjectTabs;
