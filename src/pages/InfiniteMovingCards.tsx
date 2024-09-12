"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Working at Kapital Kontroll",
  },
  {
    quote: "Developer",
  },
  {
    quote: "2+ years experience",
  },
  {
    quote: "From Oslo, Norway",
  },
  {
    quote: "5+ years education",
  },
];

const InfiniteMovingCardsLayout=()=> {
  return (
    <div className="h-10 rounded-md flex flex-col antialiased bg-lime-300 dark:bg-lime-300 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

export default InfiniteMovingCardsLayout;