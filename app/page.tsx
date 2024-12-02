"use client";

import { useEffect, useState } from "react";
import PortfolioContent from "@/components/PortfolioContent";
import NameSurnameLanding from "@/components/NameSurnameLanding";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <head>
        <meta
          name="google-site-verification"
          content="BRDl5hFoLAKm6FWGU89xT0Mtj8M-fiwSvE7jGzBVbfU"
        />
      </head>
      <main className="relative h-screen w-full  text-white">
        <NameSurnameLanding showPortfolio={showPortfolio} />
        <div
          className={`absolute top-0 w-full transition-transform duration-1000 ${
            showPortfolio ? "translate-y-0" : "translate-y-full"
          } z-20`}
        >
          <PortfolioContent showPortfolio={showPortfolio} />
        </div>
      </main>
    </>
  );
}
