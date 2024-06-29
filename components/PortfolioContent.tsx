import Link from "next/link";
import NavigationBar from "./navigationBar/NavigationBar";

export default function PortfolioContent() {
  return (
    <>
      <NavigationBar />

      <div id="content" className="w-full h-full flex flex-col mt-[20%] px-[4%]">
        <div id="hero" className="w-full h-full flex">
          <div id="hero-content" className="w-full h-full flex justify-center">
            <div id="leftText">
                <p className="[writing-mode:vertical-lr] [transform: rotate(180deg)]">Junior Dev</p>
            </div>
            <div id="rightText" className="flex flex-col">
                <p className="text-2xl font-thin text-slate-300">Full-stack</p>
                <p className="text-5xl font-thin">Developer</p>
                <p className="text-3xl font-thin max-w-[50%]">Hello! I&apos;m Emir, I&apos;m a junior full-stack developer based in France working for Renault Group</p>
                <Link href="/" className="text-3xl font-thin max-w-[50%] bg-white text-black p-4 mt-5 w-fit">View Portfolio</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
