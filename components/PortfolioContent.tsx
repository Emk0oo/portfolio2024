import { useEffect, useState } from "react";
import NavigationBar from "./navigationBar/NavigationBar";
import Hero from "./hero/Hero";
import Timeline from "./timeline/Timeline";

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
      {/* <NavigationBar /> */}

      <div id="content" className="w-full flex flex-col mt-8 px-4">
        <Hero showLeftText={showLeftText} showRightText={showRightText} showButton={showButton} />
        <hr className="border-gray-800 my-8" />
        <Timeline />
      </div>
    </>
  );
}
