// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import PortfolioContent from "@/components/PortfolioContent";
import NameSurnameLanding from "@/components/NameSurnameLanding";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 3000); // Trigger after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden text-white">
      <NameSurnameLanding showPortfolio={showPortfolio} />
      <div
        className={`absolute top-0 w-full transition-transform duration-1000 ${
          showPortfolio ? "translate-y-0" : "translate-y-full"
        } z-20`}
      >
        <PortfolioContent showPortfolio={showPortfolio} />
      </div>
    </main>
  );
}
