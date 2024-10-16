import { Card } from "@/types/card";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type SetActive = React.Dispatch<React.SetStateAction<boolean | Card | null>>;

interface ListViewProps {
  card: Card | null;
  setActive: SetActive;
  id: string;
}

const ListView: React.FC<ListViewProps> = ({ card, setActive, id }) => {
  if (!card) return null;  

  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-500 dark:hover:bg-zinc-800/[0.8] rounded-xl cursor-pointer"
    >
      <div className="flex gap-4 flex-col md:flex-row">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <div className="flex items-center justify-center h-full w-full">
            <div className="flex items-center justify-center">
              {card.src ? card.src() : null}  
            </div>
          </div>
        </motion.div>
        <div>
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
          >
            {card.description}
          </motion.p>
        </div>
      </div>
      <motion.button
        layoutId={`button-${card.title}-${id}`}
        className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 text-black mt-4 md:mt-0"
      >
        <Link href={card.ctaLink || "#"}>
          {card.ctaText}
        </Link>
      </motion.button>
    </motion.div>
  );
};

export default ListView;
