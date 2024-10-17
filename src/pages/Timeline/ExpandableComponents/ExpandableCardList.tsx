"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Card } from "@/types/card";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import DetailsPopup from "./DetailsPopup";
import ListView from "./ListView";

interface ExpandableCardListProps {
  cards: Card[];
}

const ExpandableCardList: React.FC<ExpandableCardListProps> = ({
  cards = [],
}) => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    document.body.style.overflow =
      active && typeof active === "object" ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <DetailsPopup active={active} setActive={setActive} id={id} />
        )}
      </AnimatePresence>
      <ul className="w-full">
        {cards.map((card) => (
          <ListView
            key={card.title}
            card={card}
            setActive={setActive}
            id={id}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpandableCardList;
