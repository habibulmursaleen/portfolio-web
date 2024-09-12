"use client";

import book from "@/assets/book.jpeg";
import ecom from "@/assets/ecom1.jpeg";
import student1 from "@/assets/student.png";
import { LinkPreview } from "@/components/ui/link-preview";
import Tabs from "@/components/ui/tabs";
import { Fullscreen, Github } from "lucide-react";
import ProjectImage from "./common/ProjectImage";

const tabs = [
  {
    title: "E-Commerce Portal",
    value: "ecommerce",
    content: (
      <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-zinc-900 drop-shadow-2xl overflow-y-visible">
        <div className="flex items-center justify-between space-x-4">
          <p>E-Commerce Portal</p>
          <div className="flex space-x-2">
            <LinkPreview
              url="https://ecommerce-dashboard-applicatin.netlify.app/"
              className="flex items-center px-3 py-2 text-white rounded-md text-sm hover:bg-gray-700"
            >
              <Fullscreen className="mr-1" /> Preview
            </LinkPreview>
            <a
              href="https://github.com/habibulmursaleen/E-commerce-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-white rounded-md text-sm hover:bg-gray-700"
            >
              <Github className="mr-1" /> GitHub
            </a>
          </div>
        </div>
        <ProjectImage src={ecom} />
      </div>
    ),
    
  },   
  {
    title: "Book Store",
    value: "bookstore",
    content: (
      <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-zinc-900 drop-shadow-2xl overflow-y-visible">
        <div className="flex items-center justify-between  space-x-4">
          <p>Online Book Store</p>
          <div className="flex space-x-2">
            <LinkPreview
              url="https://bookstore-w-rtk-query.netlify.app/"
              className="flex items-center px-3 py-2  text-white rounded-md text-sm hover:bg-gray-700"
            >
              <Fullscreen  className="mr-1" /> Preview
            </LinkPreview>

            <a
              href="https://github.com/habibulmursaleen/bookstore-w-rtk-query"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2  text-white rounded-md text-sm hover:bg-gray-700"
            >
              <Github className="mr-1" /> GitHub
            </a>
          </div>
        </div>
        <ProjectImage src={book} />
      </div>
    ),
  },
  {
    title: "Student Portal",
    value: "StudentPortal",
    content: (
      <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-zinc-900 drop-shadow-2xl overflow-y-visible">
        <div className="flex items-center justify-between  space-x-4">
          <p>Student Portal</p>
          <div className="flex space-x-2">
            <LinkPreview
              url="https://student-portal-w-rtk-query.netlify.app/"
              className="flex items-center px-3 py-2  text-white rounded-md text-sm hover:bg-gray-700"
            >
              <Fullscreen  className="mr-1" /> Preview
            </LinkPreview>
            <a
              href="https://github.com/habibulmursaleen/student-portal-w-rtk-query"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2  text-white rounded-md text-sm hover:bg-gray-700"
            >
              <Github className="mr-1" /> GitHub
            </a>
          </div>
        </div>
        <ProjectImage src={student1} />
      </div>
    ),
  },
];

const ProjectTabs=()=> {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-800 to-neutral-300 dark:from-neutral-200 dark:via-white dark:to-white z-20">
        Wondering what I have been working on!
      </h1>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

export default ProjectTabs;