"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroPills from "./HeroPills";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useWordFlick from "@/hooks/useWordFlick"; // Import the custom hook
import Image from "next/image";
import avatar from "@/public/images/avatar.png";

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

  const words = [
    "FrontEnd Developer",
    "BackEnd Developer",
    "FullStack Developer",
    "JavaScript Developer",
  ];
  const speed = 80;
  const skipDelay = 8;
  const word = useWordFlick(words, speed, skipDelay);

  return (
    <div id="hero" className="w-full h-full flex  ">
      <div
        id="hero-content"
        className="w-full h-full flex flex-col md:flex-row-reverse md:items-center md:mx-[10%] mt-[5%]  space-y-6 md:space-y-0"
      >
        <div id="avatar" className="flex  md:w-1/2 md:justify-end">
          <Image
            src={avatar}
            width={170} // Taille de l'image pour mobile
            height={170} // Taille de l'image pour mobile
            className="md:w-[300px] md:h-[300px]" // Taille de l'image pour desktop
            alt="avatar"
          />
        </div>
        <div
          id="leftText"
          className={`flex flex-col transition-opacity w-full duration-1000 opacity-100 space-y-4 md:w-1/2`}
        >
          <p className="text-4xl font-semibold">Hello! I&apos;m Emir</p>
          <p className="text-4xl font-semibold text-green-500">
            {word}
            <span className="cursor"></span>
          </p>
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
          <div id="description" className="flex mt-4">
            <p>
              I&apos;m a middle full-stack developer based in France working for
              Renault Group.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
