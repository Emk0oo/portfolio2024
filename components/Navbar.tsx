import React from "react";

const Navbar = () => {
  return (
    <header className="text-white mx-[10%] mt-2 shadow">
      <div className="container  py-3">
        <div className="flex items-center justify-between">
            <div>
                <a
                className="font-bold text-2xl lg:text-4xl"
                href="#"
                >
                EMIR 
                </a>
            </div>
    
            <nav className="space-x-4 text-lg ">
                <a className="hover:text-gray-300" href="#about">
                About
                </a>
                <a className="hover:text-gray-300" href="#portfolio">
                Timeline
                </a>
                <a className="hover:text-gray-300" href="#services">
                Technology
                </a>
                <a className="text-black hover:text-gray-900  bg-white hover:bg-slate-200 py-2 px-4 rounded-full " href="#contact">
                Contact me
                </a>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
