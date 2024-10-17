import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const ScrollBasedVelocity = () => {
  return (
    <VelocityScroll
      text="- Developer - Experience (2+) - Education (5+) - Oslo, Norway"
      default_velocity={2}
      className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-[#5046e6] md:text-7xl md:leading-[5rem]"
    />
  );
};

export default ScrollBasedVelocity;
