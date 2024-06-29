import { useEffect, useState } from "react";
import Link from "next/link";
import NavigationBar from "./navigationBar/NavigationBar";

export default function PortfolioContent({ showPortfolio }: { showPortfolio: boolean }) {
  const [showLeftText, setShowLeftText] = useState(false);
  const [showRightText, setShowRightText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (showPortfolio) {
      const leftTextTimer = setTimeout(() => {
        setShowLeftText(true);
      }, 1000); // 1 second delay for left text

      const rightTextTimer = setTimeout(() => {
        setShowRightText(true);
        setTimeout(() => {
          setShowButton(true);
        }, 500); // 0.5 second delay for button after right text
      }, 2000); // 2 second delay for right text

      return () => {
        clearTimeout(leftTextTimer);
        clearTimeout(rightTextTimer);
      };
    }
  }, [showPortfolio]);

  return (
    <>
      <NavigationBar />

      <div id="content" className="w-full h-full flex flex-col mt-[20%] px-[4%]">
        <div id="hero" className="w-full h-full flex">
          <div id="hero-content" className="w-full h-full flex mt-[10%] justify-between">
            <div
              id="leftText"
              className={`flex rotate-180 text-end transition-transform duration-1000 ${
                showLeftText ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <p className="text-8xl [writing-mode:vertical-lr]">Junior</p>
              <p className="text-8xl [writing-mode:vertical-lr]">Developer</p>
            </div>
            <div
              id="rightText"
              className={`flex flex-col w-1/2 transition-transform duration-1000 ${
                showRightText ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              } origin-bottom`}
            >
              <p className="text-5xl font-thin text-slate-300">Full-stack</p>
              <p className="text-8xl font-thin">Developer</p>
              <p className="text-3xl font-thin max-w-[50%]">
                Hello! I&apos;m Emir, I&apos;m a junior full-stack developer based in France working for Renault Group
              </p>
              <Link
                href="/"
                className={`text-3xl font-thin max-w-[50%] bg-white text-black p-4 mt-5 w-fit transition-transform duration-1000 origin-left ${
                  showButton ? "scale-x-100" : "scale-x-0"
                }`}
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
