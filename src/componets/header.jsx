import React, { useState } from "react";
import logoLight from "../assets/imtblockchain-logo-light.png";
import logoDark from "../assets/imtblockchain-logo-dark.png";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import isometric from "../assets/isometric.png";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className="fixed w-full top-0 left-0 z-50 rounded-full mt-2 bg-blue-500/30  border border-black shadow-2xl backdrop-blur-3xl" id="home">
      
      
      <nav className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between shadow">
        
        
        <div className="z-50">
          <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="w-30 sm:w-34" />
        </div>

        
        <div 
          className={`absolute top-0 border border-black lg:border-transparent left-0 w-full min-h-[80vh] rounded-4xl bg-blue-500/70 backdrop-blur-sm lg:bg-transparent  overflow-hidden lg:min-h-fit lg:static lg:w-auto lg:flex items-center gap-8 transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
         
          <ul className="flex flex-col lg:flex-row items-center gap-8 mt-24 lg:mt-0 text-white lg:text-current">
            <li className="nav-link font-Jost hover:text-blue-300 "><a href="#" onClick={toggleMenu}>Home</a></li>
            <li className="nav-link font-Jost hover:text-blue-300 "><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li className="nav-link font-Jost hover:text-blue-300 "><a href="#events" onClick={toggleMenu}>Events</a></li>
            <li className="nav-link font-Jost hover:text-blue-300 "><a href="#about" onClick={toggleMenu}>About</a></li>
            <li className="nav-link font-Jost hover:text-blue-300 "><a href="#team" onClick={toggleMenu}>Team</a></li>
          </ul>

          
          <div className="flex flex-col lg:flex-row gap-4 mt-8 lg:mt-0 items-center">
            <button onClick={() => alert('Coming Soon')} className="border border-blue-500 hover:bg-blue-700 cursor-pointer rounded-full px-5 py-2 text-white font-bold bg-blue-500  transition">
              Connect Wallet
            </button>
            <button onClick={() => alert('DUID Coming Soon')} className="border border-green-700 rounded-full px-5 py-2 text-white font-bold bg-blue-900 hover:bg-green-700 transition">
              Register
            </button>
          </div>

          <div className="absolute bottom-10 right-10 opacity-90 lg:hidden">
             <img src={isometric} alt="isometric" className="w-32" />
          </div>
        </div>

        <div className="flex items-center gap-4 z-50">
          
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-white transition">
             <div className="text-2xl">
               {isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
             </div>
          </button>

          <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
             {isMenuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-4-fill"></i>}
          </div>

        </div>

      </nav>
    </div>
  );
};

export default Header;