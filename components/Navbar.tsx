import React from "react";

const Navbar = () => {
  return (
    <header className=" mx-[10%] mt-2 shadow">
      <div className="hidden backdrop-blur-sm backdrop-brightness-150 ring-1 ring-white/10 ring-inset bg-white/5 hover:shadow-sm hover:shadow-white/20 shadow-brand-600/15 transition-shadow duration-300 p-3 rounded-xl md:block md:container md:py-3">
        <div className="flex items-center justify-between">
          <div>
            <a className="font-bold text-2xl lg:text-3xl" href="#">
              EMIR JAVOR
            </a>
          </div>

          <nav className="space-x-2 text-lg ">
            <a
              className="transition duration-300 ease-in-out hover:text-green-400 hover:bg-green-400/20 py-2 px-4 rounded-lg"
              href="#about"
            >
              About
            </a>
            <a
              className="transition duration-300 ease-in-out hover:text-purple-700 hover:bg-purple-700/20 py-2 px-4 rounded-lg"
              href="#portfolio"
            >
              Experience
            </a>
            <a
              className="transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-500/20 py-2 px-4 rounded-lg"
              href="#services"
            >
              Skills
            </a>
            <a
              className="transition duration-300 ease-in-out text-black hover:text-gray-900  bg-white hover:bg-slate-200 py-2 px-4 rounded-lg"
              href="#contact"
            >
              Contact me
            </a>
            {/* <button id="changeLanguage" className="text-black hover:text-gray-900  bg-white hover:bg-slate-200 py-2 px-4 rounded-full">
                Change Language
                </button> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
