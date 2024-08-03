import React from 'react'

const Navbar = () => {
  return (
    <header className="text-white shadow">
        <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
            <div className="hidden w-full  md:flex md:items-center">
                <a className="text-sm md:ml-6" href="#hero">
                Home
                </a>
                <a className="text-sm md:ml-6" href="#about">
                About
                </a>
                <a className="text-sm md:ml-6" href="#services">
                Services
                </a>
                <a className="text-sm md:ml-6" href="#portfolio">
                Portfolio
                </a>
                <a className="text-sm md:ml-6" href="#contact">
                Contact
                </a>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar