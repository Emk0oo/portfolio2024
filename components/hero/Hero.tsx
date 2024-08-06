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
  const speed = 90;
  const skipDelay = 8;
  const word = useWordFlick(words, speed, skipDelay);

  return (
    <div id="hero" className="w-full h-full flex  ">
      <div
        id="hero-content"
        className="w-full h-full flex flex-col md:flex-row-reverse md:items-center md:mx-[10%] mt-[2%]  space-y-6 md:space-y-0"
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
          <div id="hero-title" className="flex gap-2">
            <svg
              id="waving-hand"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-10 w-10"
              viewBox="0 0 32 32"
            >
              <g fill="none">
                <path
                  fill="url(#f2453id0)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c.22-.508.196-1.36.446-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345c-.078.875-.082.845-.242 2.962c-.235 3.095.96 5.432 1.07 8.082c0 4.994-4.377 7.448-7.44 7.448c-2.451 0-4.904-1.568-5.823-2.352l-4.596-4.198c-.562-.437-1.953-1.881-2.563-2.712c-1.664-2.263.742-3.822 2.094-3.43c-.106-.082-.748-1.124-1.055-1.634c-.825-1.657 0-2.76.61-3.064c1.383-.688 2.4.086 2.72.508c-.123-.208-.507-1.05-1.126-2.595c-.619-1.544.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813c.146.321.93 2.04 1.272 2.797c-.258-.628-.724-1.877-.889-2.454c-.328-1.36.461-2.292.962-2.532c.695-.333 2.146-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453id1)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c.22-.508.196-1.36.446-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345c-.078.875-.082.845-.242 2.962c-.235 3.095.96 5.432 1.07 8.082c0 4.994-4.377 7.448-7.44 7.448c-2.451 0-4.904-1.568-5.823-2.352l-4.596-4.198c-.563-.437-1.953-1.881-2.564-2.712c-1.663-2.263.743-3.822 2.095-3.43c-.106-.082-.748-1.124-1.055-1.634c-.825-1.657 0-2.76.61-3.064c1.383-.688 2.4.086 2.72.508c-.123-.208-.507-1.05-1.126-2.595c-.619-1.544.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813c.146.321.93 2.04 1.272 2.797c-.258-.628-.724-1.877-.889-2.454c-.328-1.36.461-2.292.961-2.532c.696-.333 2.147-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453id2)"
                  d="M28.933 11.343c-.078.875-.082.845-.242 2.962c-.083 1.094.511 5.121.511 5.121c-1.445.472-4.576-.153-5.021-5.066c.219-.508.195-1.36.445-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345"
                />
                <path
                  fill="url(#f2453id3)"
                  d="M28.933 11.343c-.078.875-.082.845-.242 2.962c-.083 1.094.511 5.121.511 5.121c-1.445.472-4.576-.153-5.021-5.066c.219-.508.195-1.36.445-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345"
                />
                <path
                  fill="url(#f2453id4)"
                  d="M28.933 11.343c-.078.875-.082.845-.242 2.962c-.083 1.094.511 5.121.511 5.121c-1.445.472-4.576-.153-5.021-5.066c.219-.508.195-1.36.445-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345"
                />
                <path
                  fill="url(#f2453id5)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c-.175 1.496-1.512 2.212-2.664 1.944c-1.453-.422-2.005-1.453-2.005-1.453s-.38-.588-.75-1.235c-.428-.748-.35-.731-1.067-2.085c-.141-.266-.831-2.07-1.04-2.799c-.328-1.36.461-2.292.962-2.532c.695-.333 2.146-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453idy)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c-.175 1.496-1.512 2.212-2.664 1.944c-1.453-.422-2.005-1.453-2.005-1.453s-.38-.588-.75-1.235c-.428-.748-.35-.731-1.067-2.085c-.141-.266-.831-2.07-1.04-2.799c-.328-1.36.461-2.292.962-2.532c.695-.333 2.146-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453id6)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c-.175 1.496-1.512 2.212-2.664 1.944c-1.453-.422-2.005-1.453-2.005-1.453s-.38-.588-.75-1.235c-.428-.748-.35-.731-1.067-2.085c-.141-.266-.831-2.07-1.04-2.799c-.328-1.36.461-2.292.962-2.532c.695-.333 2.146-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453id7)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c-.175 1.496-1.512 2.212-2.664 1.944c-1.453-.422-2.005-1.453-2.005-1.453s-.38-.588-.75-1.235c-.428-.748-.35-.731-1.067-2.085c-.141-.266-.831-2.07-1.04-2.799c-.328-1.36.461-2.292.962-2.532c.695-.333 2.146-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453idz)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c-.175 1.496-1.512 2.212-2.664 1.944c-1.453-.422-2.005-1.453-2.005-1.453s-.38-.588-.75-1.235c-.428-.748-.35-.731-1.067-2.085c-.141-.266-.831-2.07-1.04-2.799c-.328-1.36.461-2.292.962-2.532c.695-.333 2.146-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453id8)"
                  d="M16.271 8.389c.196.432 1.548 3.392 1.423 3.142c.363.82 1.49 2.82 1.817 3.367c.724 1.206-.093 2.209-.62 2.515c-1.517.88-2.388-.242-2.388-.242c-.8-1.172-1.468-2.148-2.789-4.226c-.318-.6-.898-1.938-1.132-2.587c-.577-1.602.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813"
                />
                <path
                  fill="url(#f2453id10)"
                  d="M16.271 8.389c.196.432 1.548 3.392 1.423 3.142c.363.82 1.49 2.82 1.817 3.367c.724 1.206-.093 2.209-.62 2.515c-1.517.88-2.388-.242-2.388-.242c-.8-1.172-1.468-2.148-2.789-4.226c-.318-.6-.898-1.938-1.132-2.587c-.577-1.602.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813"
                />
                <path
                  fill="url(#f2453id9)"
                  d="M16.271 8.389c.196.432 1.548 3.392 1.423 3.142c.363.82 1.49 2.82 1.817 3.367c.724 1.206-.093 2.209-.62 2.515c-1.517.88-2.388-.242-2.388-.242c-.8-1.172-1.468-2.148-2.789-4.226c-.318-.6-.898-1.938-1.132-2.587c-.577-1.602.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813"
                />
                <path
                  fill="url(#f2453ida)"
                  d="M16.271 8.389c.196.432 1.548 3.392 1.423 3.142c.363.82 1.49 2.82 1.817 3.367c.724 1.206-.093 2.209-.62 2.515c-1.517.88-2.388-.242-2.388-.242c-.8-1.172-1.468-2.148-2.789-4.226c-.318-.6-.898-1.938-1.132-2.587c-.577-1.602.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813"
                />
                <path
                  fill="url(#f2453idb)"
                  d="M16.271 8.389c.196.432 1.548 3.392 1.423 3.142c.363.82 1.49 2.82 1.817 3.367c.724 1.206-.093 2.209-.62 2.515c-1.517.88-2.388-.242-2.388-.242c-.8-1.172-1.468-2.148-2.789-4.226c-.318-.6-.898-1.938-1.132-2.587c-.577-1.602.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813"
                />
                <path
                  fill="url(#f2453id11)"
                  d="M16.271 8.389c.196.432 1.548 3.392 1.423 3.142c.363.82 1.49 2.82 1.817 3.367c.724 1.206-.093 2.209-.62 2.515c-1.517.88-2.388-.242-2.388-.242c-.8-1.172-1.468-2.148-2.789-4.226c-.318-.6-.898-1.938-1.132-2.587c-.577-1.602.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813"
                />
                <path
                  fill="url(#f2453idc)"
                  d="M10.988 12.445c1.383-.688 2.4.086 2.72.508c.999 1.507 2.19 3.22 2.74 4.132c1.47 2.43-1.538 3.484-1.538 3.484c-2.766-3.117-3.278-3.274-3.477-3.427c-.106-.081-.748-1.123-1.055-1.633c-.825-1.657 0-2.761.61-3.064"
                />
                <path
                  fill="url(#f2453id12)"
                  d="M10.988 12.445c1.383-.688 2.4.086 2.72.508c.999 1.507 2.19 3.22 2.74 4.132c1.47 2.43-1.538 3.484-1.538 3.484c-2.766-3.117-3.278-3.274-3.477-3.427c-.106-.081-.748-1.123-1.055-1.633c-.825-1.657 0-2.761.61-3.064"
                />
                <path
                  fill="url(#f2453idd)"
                  d="M10.988 12.445c1.383-.688 2.4.086 2.72.508c.999 1.507 2.19 3.22 2.74 4.132c1.47 2.43-1.538 3.484-1.538 3.484c-2.766-3.117-3.278-3.274-3.477-3.427c-.106-.081-.748-1.123-1.055-1.633c-.825-1.657 0-2.761.61-3.064"
                />
                <path
                  fill="url(#f2453ide)"
                  d="M10.988 12.445c1.383-.688 2.4.086 2.72.508c.999 1.507 2.19 3.22 2.74 4.132c1.47 2.43-1.538 3.484-1.538 3.484c-2.766-3.117-3.278-3.274-3.477-3.427c-.106-.081-.748-1.123-1.055-1.633c-.825-1.657 0-2.761.61-3.064"
                />
                <path
                  fill="url(#f2453idf)"
                  d="M10.988 12.445c1.383-.688 2.4.086 2.72.508c.999 1.507 2.19 3.22 2.74 4.132c1.47 2.43-1.538 3.484-1.538 3.484c-2.766-3.117-3.278-3.274-3.477-3.427c-.106-.081-.748-1.123-1.055-1.633c-.825-1.657 0-2.761.61-3.064"
                />
                <path
                  fill="url(#f2453idg)"
                  d="M10.988 12.445c1.383-.688 2.4.086 2.72.508c.999 1.507 2.19 3.22 2.74 4.132c1.47 2.43-1.538 3.484-1.538 3.484c-2.766-3.117-3.278-3.274-3.477-3.427c-.106-.081-.748-1.123-1.055-1.633c-.825-1.657 0-2.761.61-3.064"
                />
                <path
                  fill="url(#f2453idh)"
                  d="M9.338 20.573c-1.663-2.263.743-3.822 2.095-3.43c.64.395 1.63 1.386 2.051 1.833c2.682 2.615 2.235 3.422 1.485 4.31c-.727.602-1.672 1.085-3.067 0c-.563-.438-1.953-1.882-2.564-2.713"
                />
                <path
                  fill="url(#f2453idi)"
                  d="M9.338 20.573c-1.663-2.263.743-3.822 2.095-3.43c.64.395 1.63 1.386 2.051 1.833c2.682 2.615 2.235 3.422 1.485 4.31c-.727.602-1.672 1.085-3.067 0c-.563-.438-1.953-1.882-2.564-2.713"
                />
                <path
                  fill="url(#f2453idj)"
                  d="M9.338 20.573c-1.663-2.263.743-3.822 2.095-3.43c.64.395 1.63 1.386 2.051 1.833c2.682 2.615 2.235 3.422 1.485 4.31c-.727.602-1.672 1.085-3.067 0c-.563-.438-1.953-1.882-2.564-2.713"
                />
                <path
                  fill="url(#f2453idk)"
                  d="M9.338 20.573c-1.663-2.263.743-3.822 2.095-3.43c.64.395 1.63 1.386 2.051 1.833c2.682 2.615 2.235 3.422 1.485 4.31c-.727.602-1.672 1.085-3.067 0c-.563-.438-1.953-1.882-2.564-2.713"
                />
                <path
                  fill="url(#f2453id13)"
                  d="M9.338 20.573c-1.663-2.263.743-3.822 2.095-3.43c.64.395 1.63 1.386 2.051 1.833c2.682 2.615 2.235 3.422 1.485 4.31c-.727.602-1.672 1.085-3.067 0c-.563-.438-1.953-1.882-2.564-2.713"
                />
                <path
                  fill="url(#f2453idl)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c.22-.508.196-1.36.446-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345c-.078.875-.082.845-.242 2.962c-.235 3.095.96 5.432 1.07 8.082c0 4.994-4.377 7.448-7.44 7.448c-2.451 0-4.904-1.568-5.823-2.352l-4.596-4.198c-.563-.437-1.953-1.881-2.564-2.712c-1.663-2.263.743-3.822 2.095-3.43c-.106-.082-.748-1.124-1.055-1.634c-.825-1.657 0-2.76.61-3.064c1.383-.688 2.4.086 2.72.508c-.123-.208-.507-1.05-1.126-2.595c-.619-1.544.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813c.146.321.93 2.04 1.272 2.797c-.258-.628-.724-1.877-.889-2.454c-.328-1.36.461-2.292.961-2.532c.696-.333 2.147-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453idm)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c.22-.508.196-1.36.446-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345c-.078.875-.082.845-.242 2.962c-.235 3.095.96 5.432 1.07 8.082c0 4.994-4.377 7.448-7.44 7.448c-2.451 0-4.904-1.568-5.823-2.352l-4.596-4.198c-.563-.437-1.953-1.881-2.564-2.712c-1.663-2.263.743-3.822 2.095-3.43c-.106-.082-.748-1.124-1.055-1.634c-.825-1.657 0-2.76.61-3.064c1.383-.688 2.4.086 2.72.508c-.123-.208-.507-1.05-1.126-2.595c-.619-1.544.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813c.146.321.93 2.04 1.272 2.797c-.258-.628-.724-1.877-.889-2.454c-.328-1.36.461-2.292.961-2.532c.696-.333 2.147-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453idn)"
                  d="M20.35 7.077c1.217 2.683 2.71 5.975 3.83 7.283c.22-.508.196-1.36.446-3.44c.226-1.876 1.774-2.055 2.439-1.922c1.47.307 1.917 1.796 1.868 2.345c-.078.875-.082.845-.242 2.962c-.235 3.095.96 5.432 1.07 8.082c0 4.994-4.377 7.448-7.44 7.448c-2.451 0-4.904-1.568-5.823-2.352l-4.596-4.198c-.563-.437-1.953-1.881-2.564-2.712c-1.663-2.263.743-3.822 2.095-3.43c-.106-.082-.748-1.124-1.055-1.634c-.825-1.657 0-2.76.61-3.064c1.383-.688 2.4.086 2.72.508c-.123-.208-.507-1.05-1.126-2.595c-.619-1.544.378-2.498.954-2.782c1.25-.579 2.438.156 2.735.813c.146.321.93 2.04 1.272 2.797c-.258-.628-.724-1.877-.889-2.454c-.328-1.36.461-2.292.961-2.532c.696-.333 2.147-.42 2.72.844z"
                />
                <path
                  fill="url(#f2453ido)"
                  d="M22.046 10.668c.751 1.534 1.501 2.909 2.135 3.662c.065.67.123 1.052.283 1.63c-1.265-1.266-2.49-4.033-2.418-5.292"
                />
                <path
                  fill="url(#f2453idp)"
                  fill-rule="evenodd"
                  d="M4.126 16.9a.54.54 0 0 1 .539.54c0 .9.364 2.105 1.149 3.078c.77.957 1.94 1.681 3.58 1.681a.539.539 0 0 1 0 1.078c-2.002 0-3.467-.9-4.42-2.082c-.938-1.164-1.387-2.609-1.387-3.756a.54.54 0 0 1 .539-.539"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453idq)"
                  fill-rule="evenodd"
                  d="M4.126 16.9a.54.54 0 0 1 .539.54c0 .9.364 2.105 1.149 3.078c.77.957 1.94 1.681 3.58 1.681a.539.539 0 0 1 0 1.078c-2.002 0-3.467-.9-4.42-2.082c-.938-1.164-1.387-2.609-1.387-3.756a.54.54 0 0 1 .539-.539"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453idr)"
                  fill-rule="evenodd"
                  d="M4.126 16.9a.54.54 0 0 1 .539.54c0 .9.364 2.105 1.149 3.078c.77.957 1.94 1.681 3.58 1.681a.539.539 0 0 1 0 1.078c-2.002 0-3.467-.9-4.42-2.082c-.938-1.164-1.387-2.609-1.387-3.756a.54.54 0 0 1 .539-.539"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453ids)"
                  fill-rule="evenodd"
                  d="M2.448 18.823a.54.54 0 0 1 .54.54c0 1.91 1.43 4.462 4.436 4.462a.539.539 0 0 1 0 1.078c-3.78 0-5.515-3.23-5.515-5.54a.54.54 0 0 1 .54-.54"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453idt)"
                  fill-rule="evenodd"
                  d="M2.448 18.823a.54.54 0 0 1 .54.54c0 1.91 1.43 4.462 4.436 4.462a.539.539 0 0 1 0 1.078c-3.78 0-5.515-3.23-5.515-5.54a.54.54 0 0 1 .54-.54"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453idu)"
                  fill-rule="evenodd"
                  d="M22.636 9.852a.539.539 0 0 1-.542-.536c-.006-.9-.378-2.103-1.169-3.071c-.777-.952-1.95-1.668-3.591-1.658a.54.54 0 0 1-.007-1.078c2.002-.013 3.473.879 4.433 2.054c.946 1.158 1.404 2.6 1.412 3.746a.539.539 0 0 1-.536.543"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453idv)"
                  fill-rule="evenodd"
                  d="M22.636 9.852a.539.539 0 0 1-.542-.536c-.006-.9-.378-2.103-1.169-3.071c-.777-.952-1.95-1.668-3.591-1.658a.54.54 0 0 1-.007-1.078c2.002-.013 3.473.879 4.433 2.054c.946 1.158 1.404 2.6 1.412 3.746a.539.539 0 0 1-.536.543"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453idw)"
                  fill-rule="evenodd"
                  d="M24.3 7.919a.539.539 0 0 1-.542-.536c-.013-1.91-1.46-4.454-4.466-4.434a.539.539 0 0 1-.007-1.078c3.78-.025 5.535 3.195 5.55 5.505a.539.539 0 0 1-.535.543"
                  clip-rule="evenodd"
                />
                <path
                  fill="url(#f2453idx)"
                  fill-rule="evenodd"
                  d="M24.3 7.919a.539.539 0 0 1-.542-.536c-.013-1.91-1.46-4.454-4.466-4.434a.539.539 0 0 1-.007-1.078c3.78-.025 5.535 3.195 5.55 5.505a.539.539 0 0 1-.535.543"
                  clip-rule="evenodd"
                />
                <g filter="url(#f2453id14)">
                  <path
                    stroke="#FFC339"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M22.531 14.429c-1.937.781-6.32 3.347-7.608 9.064"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="f2453id0"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(10.49397 18.25002 -11.9225 6.85558 19.267 13.835)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".003" stop-color="#FFC133" />
                    <stop offset=".698" stop-color="#FFC53F" />
                    <stop offset=".797" stop-color="#FFAD3E" />
                    <stop offset=".945" stop-color="#EC7D58" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-.6563 -12.47285 4.7783 -.25142 29.761 18.46)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".003" stop-color="#FFE849" />
                    <stop offset="1" stop-color="#FFE647" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id2"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(99.682 10.113 16.685)scale(6.68903 2.56255)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".003" stop-color="#FFE849" />
                    <stop offset="1" stop-color="#FFE647" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id3"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.70547 0 0 10.9717 24.18 13.55)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EE9F2C" />
                    <stop offset="1" stop-color="#EE9F2C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id4"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-.32444 -4.54214 3.15487 -.22535 25.368 17.804)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93D" />
                    <stop offset="1" stop-color="#FFC33A" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id5"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-4.1875 2.31887 -4.65816 -8.41186 22.824 10.891)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".563" stop-color="#F09D2E" stop-opacity="0" />
                    <stop offset="1" stop-color="#F09D2E" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id6"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(3.125 -.75 1.65852 6.91053 21.824 7.085)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFEC4C" />
                    <stop offset="1" stop-color="#FFEC4C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id7"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.62211 1.72282 -1.33572 2.03294 16.577 5.987)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D99F2B" />
                    <stop offset="1" stop-color="#D99F2B" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id8"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-3.96122 2.36624 -4.93787 -8.2663 18.313 12.37)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".563" stop-color="#F09D2E" stop-opacity="0" />
                    <stop offset="1" stop-color="#F09D2E" />
                  </radialGradient>
                  <radialGradient
                    id="f2453id9"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.54183 -1.70758 5.19874 7.7386 17.781 9.429)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFEC4C" />
                    <stop offset="1" stop-color="#FFEC4C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453ida"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(3.5 -1.625 7.41995 15.9814 15.449 13.21)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".598" stop-color="#F09D2E" stop-opacity="0" />
                    <stop offset="1" stop-color="#F09D2E" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idb"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.6875 1.71877 -1.36988 2.14198 11.949 7.366)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D99F2B" />
                    <stop offset="1" stop-color="#D99F2B" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idc"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-2.81157 2.58981 -5.07136 -5.5056 15.635 16.37)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".563" stop-color="#F09D2E" stop-opacity="0" />
                    <stop offset="1" stop-color="#F09D2E" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idd"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.84456 -.62 1.31334 6.02556 14.698 13.09)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFEC4C" />
                    <stop offset="1" stop-color="#FFEC4C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453ide"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(3.09229 -2.61476 13.36754 15.80883 12.92 17.075)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".598" stop-color="#F09D2E" stop-opacity="0" />
                    <stop offset="1" stop-color="#F09D2E" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idf"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.54888 1.44229 -1.0855 1.91836 9.6 12.171)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D99F2B" />
                    <stop offset="1" stop-color="#D99F2B" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idg"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(1.15625 -1.1875 5.3617 5.2206 11.136 17.929)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A85300" />
                    <stop offset=".825" stop-color="#A85300" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idh"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-3.0158 2.24226 -4.21894 -5.67438 14.785 20.718)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".563" stop-color="#F09D2E" stop-opacity="0" />
                    <stop offset="1" stop-color="#F09D2E" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idi"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(3.0512 -.53678 .93252 5.30068 13.779 17.877)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFEC4C" />
                    <stop offset="1" stop-color="#FFEC4C" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idj"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-34.314 40.477 -8.562)scale(4.01583 19.3881)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".598" stop-color="#F09D2E" stop-opacity="0" />
                    <stop offset="1" stop-color="#F09D2E" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idk"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.73403 1.24873 -.82863 1.81424 8.31 17.083)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D99F2B" />
                    <stop offset="1" stop-color="#D99F2B" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idl"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-10.93755 13.5 -21.8324 -17.68836 23.949 12.523)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".872" stop-color="#F6814F" stop-opacity="0" />
                    <stop offset="1" stop-color="#F7814F" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idm"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(4.375 17.93747 -19.68135 4.80034 20.324 12.71)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".853" stop-color="#F6814F" stop-opacity="0" />
                    <stop offset="1" stop-color="#F7814F" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idn"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(1.375 2.875 -2.56302 1.2258 24.511 8.023)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D99F2B" />
                    <stop offset="1" stop-color="#D99F2B" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453ido"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(149.254 10.292 10.421)scale(1.2136 3.75534)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".201" stop-color="#B4813D" />
                    <stop offset="1" stop-color="#B4813D" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idp"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.4881 4.69345 -6.9606 3.68996 4.893 17.19)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#419FFD" />
                    <stop offset="1" stop-color="#4B6DCB" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idq"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(.75 .03125 -.06577 1.57838 3.39 17.585)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5486C7" />
                    <stop offset="1" stop-color="#5486C7" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idr"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-.28125 .70313 -2.06816 -.82725 9.016 21.866)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5486C7" />
                    <stop offset="1" stop-color="#5486C7" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453ids"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(94.712 -6.55 12.412)scale(4.2017 7.06475)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#419FFD" />
                    <stop offset="1" stop-color="#4B6DCB" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idt"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(.71542 .0298 -.06267 1.50488 1.722 19.476)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5486C7" />
                    <stop offset="1" stop-color="#5486C7" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idu"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.21836 3.87285 -5.7436 3.28993 18.508 2.346)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#419FFD" />
                    <stop offset="1" stop-color="#4B6DCB" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idv"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(18.861 -3.593 52.16)scale(.64211 1.03351)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4D8AC1" />
                    <stop offset="1" stop-color="#4D8AC1" stop-opacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idw"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(2.71428 4.83482 -7.17211 4.02645 20.387 .762)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#419FFD" />
                    <stop offset="1" stop-color="#4B6DCB" />
                  </radialGradient>
                  <radialGradient
                    id="f2453idx"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(18.853 2.38 57.27)scale(.61247 .98543)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4D8AC1" />
                    <stop offset="1" stop-color="#4D8AC1" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="f2453idy"
                    x1="20.379"
                    x2="20.379"
                    y1="15.795"
                    y2="13.21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC337" />
                    <stop offset="1" stop-color="#FFC337" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="f2453idz"
                    x1="17.074"
                    x2="18.636"
                    y1="12.304"
                    y2="11.554"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A85300" />
                    <stop offset=".825" stop-color="#A85300" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="f2453id10"
                    x1="16"
                    x2="16"
                    y1="17.375"
                    y2="14.737"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC337" />
                    <stop offset="1" stop-color="#FFC337" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="f2453id11"
                    x1="13.355"
                    x2="14.395"
                    y1="13.835"
                    y2="13.108"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A85300" />
                    <stop offset=".825" stop-color="#A85300" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="f2453id12"
                    x1="13.442"
                    x2="13.442"
                    y1="20.569"
                    y2="18.356"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC337" />
                    <stop offset="1" stop-color="#FFC337" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="f2453id13"
                    x1="14.949"
                    x2="12.432"
                    y1="27.585"
                    y2="22.437"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC337" />
                    <stop offset="1" stop-color="#FFC337" stop-opacity="0" />
                  </linearGradient>
                  <filter
                    id="f2453id14"
                    width="13.608"
                    height="15.065"
                    x="11.923"
                    y="11.429"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_20020_1063"
                      stdDeviation="1"
                    />
                  </filter>
                </defs>
              </g>
            </svg>
            <p className="text-4xl font-semibold">Hello! I&apos;m Emir Javor </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 h-7 w-7"
              viewBox="0 0 16 16"
            >
              <path
                fill="#03a9f4"
                fill-rule="evenodd"
                d="M8.716.315a1 1 0 0 0-1.432 0L6.646.97a1 1 0 0 1-.988.265l-.88-.248a1 1 0 0 0-1.24.716l-.226.886a1 1 0 0 1-.723.723l-.886.225a1 1 0 0 0-.716 1.24l.248.881a1 1 0 0 1-.265.988l-.655.638a1 1 0 0 0 0 1.432l.655.639a1 1 0 0 1 .265.987l-.248.88a1 1 0 0 0 .716 1.24l.886.226a1 1 0 0 1 .723.723l.225.886a1 1 0 0 0 1.24.717l.881-.248a1 1 0 0 1 .988.264l.638.655a1 1 0 0 0 1.432 0l.639-.655a1 1 0 0 1 .987-.264l.88.248a1 1 0 0 0 1.24-.717l.226-.886a1 1 0 0 1 .723-.723l.886-.225a1 1 0 0 0 .717-1.24l-.248-.88a1 1 0 0 1 .264-.988l.655-.639a1 1 0 0 0 0-1.432l-.655-.638a1 1 0 0 1-.264-.988l.248-.88a1 1 0 0 0-.717-1.24l-.886-.226a1 1 0 0 1-.723-.723l-.225-.886a1 1 0 0 0-1.24-.716l-.88.248A1 1 0 0 1 9.354.97zm3.057 5.975a.75.75 0 0 0-1.042-1.08L6.597 9.202L5.28 7.887A.75.75 0 0 0 4.22 8.95l1.839 1.834a.75.75 0 0 0 1.05.01z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
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
              I learn. I build. I ship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
