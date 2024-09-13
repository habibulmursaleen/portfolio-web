import { useOutsideClick } from "@/hooks/use-outside-click";
import { Card } from "@/types/card";
import { motion } from "framer-motion";
import { useRef } from "react";

type SetActive = React.Dispatch<React.SetStateAction<boolean | Card | null>>;

interface DetailsPopupProps {
  active: Card | null;
  setActive: SetActive;
  id: string;
}

const DetailsPopup: React.FC<DetailsPopupProps> = ({
  active,
  setActive,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
      {/* <motion.button
        key={`button-${active?.title}-${id}`}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
        className="absolute top-4 right-12 lg:hidden flex items-center justify-center bg-white rounded-full h-8 w-8"
        onClick={() => setActive(null)}
        onTouchStart={() => setActive(null)}
      >
        <CloseIcon />
      </motion.button> */}

      <motion.div
        layoutId={`card-${active?.title}-${id}`}
        ref={ref}
        className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mb-4 md:mb-10 h-full md:h-fit md:max-h-[90%] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden"
      >
        <div className="relative p-4">
          <motion.div
            layoutId={`image-${active?.title}-${id}`}
            className="relative overflow-hidden rounded-t-2xl"
          >
            <div className="flex justify-center items-center h-60 w-full">
              {active?.cover()}
            </div>
          </motion.div>
        </div>

        <div>
          <div className="p-4">
            <motion.h3
              layoutId={`title-${active?.title}-${id}`}
              className="font-bold text-neutral-700 dark:text-neutral-200 text-xl"
            >
              {active?.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${active?.description}-${id}`}
              className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm"
            >
              {active?.description}
            </motion.p>
          </div>

          <div className="relative px-4 pb-8 h-screen sm:h-auto">
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-neutral-600 text-xs md:text-sm lg:text-base h-full sm:h-auto overflow-auto dark:text-neutral-400"
            >
              {active?.content()}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailsPopup;
