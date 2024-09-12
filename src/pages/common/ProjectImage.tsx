import Image, { StaticImageData } from "next/image";

const ProjectImage = ({ src }: { src: string | StaticImageData }) => {
  return (
    <div className="mt-5 relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden">
      <Image
        src={src}
        alt="Project Image"
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

export default ProjectImage;
