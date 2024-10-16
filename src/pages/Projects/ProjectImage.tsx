import Image, { StaticImageData } from "next/image";

const ProjectImage = ({ src }: { src: string | StaticImageData }) => {
  return (
    <div className="relative flex h-auto w-auto flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Image
        src={src}
        alt="Project Image"
        layout="responsive"
        className="object-cover object-center"
      />
    </div>
  );
};

export default ProjectImage;
