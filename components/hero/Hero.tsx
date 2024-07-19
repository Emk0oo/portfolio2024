"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroPills from "./HeroPills";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useWordFlick from "@/hooks/useWordFlick"; // Import the custom hook

type HeroProps = {
  showLeftText: boolean;
  showRightText: boolean;
  showButton: boolean;
};

export default function Hero({ showLeftText, showRightText }: HeroProps) {
  const pillsData = [
    { LinkName: "Github", link: "https://github.com/Emk0oo", Icon: FaGithub },
    {
      LinkName: "LinkedIn",
      link: "https://www.linkedin.com/in/emirjavor/",
      Icon: FaLinkedin,
    },
    {
      LinkName: "Email",
      link: "mailto:emir.javor1@gmail.com",
      Icon: FaEnvelope,
    },
  ];

  const words = ["FrontEnd developer", "BackEnd Developer", "FullStack developer"];
  const speed = 80;
  const skipDelay = 5;
  const word = useWordFlick(words, speed, skipDelay);

  return (
    <div id="hero" className="w-full h-full flex">
      <div
        id="hero-content"
        className="hidden md:w-full md:flex md:mt-[10%] md:justify-between"
      >
        {showLeftText && (
          <div
            id="leftText"
            className="flex rotate-180 text-end transition-transform duration-1000 translate-y-0"
          >
            <p className="text-8xl [writing-mode:vertical-lr]">Middle</p>
            <p className="text-8xl [writing-mode:vertical-lr]">Developer</p>
          </div>
        )}
      </div>
      <div
        id="hero-content"
        className="w-full h-full flex-col mt-[10%] space-y-6"
      >
        <div
          id="rightText"
          className={`flex flex-col transition-opacity duration-1000 opacity-100 space-y-4`}
        >
          <p className="text-4xl font-semibold">Hello! I&apos;m Emir</p>
          <p className="text-4xl font-semibold text-green-500">{word}</p>
          <div id="hero-pills" className="flex flex-row space-x-4">
            {pillsData.map((pill, index) => (
              <HeroPills
                key={index}
                LinkName={pill.LinkName}
                link={pill.link}
                Icon={pill.Icon}
              />
            ))}
          </div>
        </div>
        <div id="description" className="flex mt-4">
          <p>
            I&apos;m a middle full-stack developer based in France working for
            Renault Group.
          </p>
        </div>
      </div>
    </div>
  );
}
