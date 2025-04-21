import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white px-5 py-4">
      <div className="flex justify-between items-center md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <button className="flex items-center gap-2 text-xs font-medium text-white border border-white rounded-lg px-3 py-2">
          <FaSearch className="text-sm" />
          Book Appointment
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-2 md:hidden text-white text-base">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Our Team</a>
          <a href="#">Contacts us</a>
        </div>
      )}

      <div className="hidden md:flex justify-between items-center">
        <div className="flex gap-7 text-base leading-loose text-white mx-auto">
          <a href="#" className="whitespace-nowrap">
            Home
          </a>
          <a href="#">About us</a>
          <a href="#" className="whitespace-nowrap">
            Services
          </a>
          <a href="#" className="whitespace-nowrap">
            Blog
          </a>
          <a href="#">Our Team</a>
          <a href="#">Contacts us</a>
        </div>
        <div className="absolute right-20 flex items-center gap-15">
          <FaSearch className="text-base text-white cursor-pointer" />
          <button className="flex items-center gap-2 text-xs font-medium text-white border border-white rounded-lg px-3 py-2 hover:bg-white hover:text-yellow-950 transition-colors duration-200 cursor-pointer">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
