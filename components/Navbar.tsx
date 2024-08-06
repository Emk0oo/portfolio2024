import React from "react";

const Navbar = () => {
  return (
    <header className=" mx-[10%] mt-2 shadow">
      <div className="hidden backdrop-blur-sm backdrop-brightness-150 ring-1 ring-white/10 ring-inset bg-white/5 hover:shadow-sm hover:shadow-white/20 shadow-brand-600/15 transition-shadow duration-300 p-3 rounded-xl md:block md:container md:py-3">
        <div className="flex items-center justify-between">
          <div>
            <button className="font-bold text-2xl lg:text-3xl">
              EMIR JAVOR
            </button>
          </div>

          <nav className="hidden md:block md:space-x-2 md:text-lg ">
            <button
              className="transition duration-300 ease-in-out hover:text-green-400 hover:bg-green-400/20 py-2 px-4 rounded-lg"
              
            >
              About
            </button>
            <button
              className="transition duration-300 ease-in-out hover:text-purple-700 hover:bg-purple-700/20 py-2 px-4 rounded-lg"
              
            >
              Experience
            </button>
            <button
              className="transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-500/20 py-2 px-4 rounded-lg"
              
            >
              Skills
            </button>
            <button
              className="transition duration-300 ease-in-out text-black hover:text-gray-900  bg-white hover:bg-slate-200 py-2 px-4 rounded-lg"
              
            >
              Contact me
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
