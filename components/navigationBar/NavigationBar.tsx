import NavigationLinks from "./NavigationLinks";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Assurez-vous d'installer react-icons

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="NavigationBar" className="flex justify-between items-center w-full px-[4%] pt-[3%] fixed top-0 bg-black z-50">
      <div id="logo" className="flex flex-col w-1/2 md:w-1/5">
        <p className="text-5xl font-thin">EMIR</p>
        <p className="text-5xl font-thin">JAVOR</p>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>
      <div id="links" className={`w-full md:w-4/5 md:flex ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row justify-around border-t md:border-t-0 border-gray-500 pt-5 md:pt-0">
          <li><NavigationLinks href="/">About</NavigationLinks></li>
          <li><NavigationLinks href="/">Portfolio</NavigationLinks></li>
          <li><NavigationLinks href="/">Services</NavigationLinks></li>
          <li><NavigationLinks href="/">Contact</NavigationLinks></li>
        </ul>
      </div>
      <div id="langage" className="flex flex-col md:flex-row justify-around ml-1 pb-3 md:pb-0 md:w-1/5">
        <button className="text-2xl text-slate-400 uppercase hover:underline">FR</button>
        <button className="text-2xl text-slate-400 uppercase hover:underline">GE</button>
        <button className="text-2xl text-white uppercase underline">EN</button>
      </div>
    </div>
  );
}
