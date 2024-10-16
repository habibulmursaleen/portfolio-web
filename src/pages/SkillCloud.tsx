import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
 "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "azure",
  "postgresql",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
  "springboot",
  "csharp",
  "dotnet",
  "microsoftsqlserver",
  "redux",
  "tailwindcss",
  "reactquery",
  "python",
  "microsoftazure",
  "mongodb",
  'chai',
  'mocha',
  'chakraui',
  'mui',
];

const SkillCloud=()=> {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-4 pb-2">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default SkillCloud;
