"use client";
import { useState } from "react";
import Location from "./Location";

const FooterBackground=()=> {
  const [email, setEmail] = useState("");

  return (
    <div className="relative bg-black rounded-md py-8 px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            you know what? lets talk!
          </h1>
          <p className="text-neutral-500 max-w-lg my-2 text-sm md:text-base">
            I am always open to new projects or collaborations
            opportunities. Let&apos;s connect and make something great together.
          </p>
          <input
            type="text"
            placeholder="hi@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full md:w-[300px] mt-4 bg-neutral-950 text-neutral-100 placeholder:text-neutral-700"
          />
        </div>
        <div className="flex-none">
          <Location />
        </div>
      </div>
      <p className="text-neutral-500 text-sm text-center lg:text-right md:text-right mr-4 md:mr-10">
        ©2024 Mursaleen. All rights reserved.
      </p>
      {/* <BackgroundBeams /> */}
    </div>
  );
}

export default FooterBackground;