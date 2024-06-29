"use client";

import { useEffect, useState } from "react";
import PortfolioContent from "@/components/PortfolioContent";
import NameSurnameLanding from "@/components/NameSurnameLanding";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white">
      <NameSurnameLanding showPortfolio={showPortfolio} />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          showPortfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <PortfolioContent />
      </div>
    </main>
  );
}
