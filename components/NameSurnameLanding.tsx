"use client";

import { useEffect, useState } from "react";

export default function NameSurnameLanding({ showPortfolio }: { showPortfolio: boolean }) {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    if (showPortfolio) {
      const timer = setTimeout(() => {
        setAnimateText(true);
      }, 0); // Delay for text size reduction

      return () => clearTimeout(timer);
    }
  }, [showPortfolio]);

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000  ${
        showPortfolio ? "opacity-0" : "opacity-100"
      } z-10`}
    >
      <div
        className={`text-center flex flex-col items-center justify-center transition-transform duration-500 ${
          animateText ? "scale-50" : "scale-100"
        }`}
      >
        <p className="text-8xl font-thin">EMIR</p>
        <p className="text-8xl font-thin">JAVOR</p>
      </div>
    </div>
  );
}
