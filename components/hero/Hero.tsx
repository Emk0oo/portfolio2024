"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroPills from "./HeroPills";
import { FaGithub } from "react-icons/fa";

export default function Hero({
  showLeftText,
  showRightText,
  showButton,
}: {
  showLeftText: boolean;
  showRightText: boolean;
  showButton: boolean;
}) {
  return (
    <div id="hero" className="w-full h-full flex-row">
      <div id="hero-content" className="hidden md:w-full  md:flex md:mt-[10%] md:justify-between">
        <div
          id="leftText"
          className="flex rotate-180 text-end transition-transform duration-1000 translate-y-0"
        >
          <p className="text-8xl [writing-mode:vertical-lr]">Middle</p>
          <p className="text-8xl [writing-mode:vertical-lr]">Developer</p>
        </div>
      </div>
      <div
        id="hero-content"
        className="w-full h-full flex mt-[10%] justify-between"
      >
        <div
          id="rightText"
          className="flex flex-col  transition-transform duration-1000 translate-y-0 opacity-100 origin-bottom"
        >
          <p className="text-4xl font-semibold ">
            {" "}
            Hello ! I&apos;m Emir
          </p>
          <p className="text-4xl font-semibold text-green-500">
            {" "}
            Full-stack developer
          </p>
          <div id="hero-pills" className="flex flex-row">
            <HeroPills LinkName="Github" link="https://github.com/Emir-M" Icon={FaGithub} />
          </div>
          <p>I&apos;m a junior full-stack developer based
            in France working for Renault Group</p>
        </div>
      </div>
    </div>
  );
}

/*<div id="hero-content" className="w-full h-full flex mt-[10%] justify-between">
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
      </div>*/
