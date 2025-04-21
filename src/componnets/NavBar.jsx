"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      router.push(`/SearchDetailPage?query=${encodeURIComponent(searchValue)}`);
    }
  };

  const linkHover = "hover:opacity-80 transition-opacity duration-200";

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 px-5 py-4 transition-colors ${
        servicesOpen ? "bg-[#643F2E] text-white" : "bg-transparent text-white"
      }`}
    >
      {/* Mobile */}
      <div className="flex justify-between items-center md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <button className="flex items-center gap-2 text-xs font-medium border border-white rounded-lg px-3 py-2">
          <FaSearch className="text-sm" />
          Book Appointment
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-2 md:hidden text-base">
          <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
            Home
          </a>
          <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
            About us
          </a>
          <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
            Services
          </a>
          <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
            Blog
          </a>
          <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
            Our Team
          </a>
          <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
            Contacts us
          </a>
        </div>
      )}

      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center w-full">
        {/* Centered Links */}
        {!showSearch && (
          <div className="flex gap-7 text-base leading-loose mx-auto">
            <a style={{ cursor: "pointer" }} href="/" className={linkHover}>
              Home
            </a>
            <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
              About us
            </a>
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setShowSearch(false);
              }}
              className={`flex items-center cursor-pointer gap-1 whitespace-nowrap ${linkHover}`}
            >
              Services {servicesOpen && <FaChevronUp />}
            </button>
            <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
              Blog
            </a>
            <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
              Our Team
            </a>
            <a style={{ cursor: "pointer" }} href="#" className={linkHover}>
              Contacts us
            </a>
          </div>
        )}

        {/* Search & Appointment */}
        <div
          className={`absolute right-20 flex items-center gap-5 ${
            showSearch ? "mt-10" : ""
          }`}
        >
          {showSearch ? (
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleSearchSubmit}
                placeholder="Search..."
                className="pl-9 pr-3 py-1 text-white placeholder-white bg-transparent border border-white rounded-md outline-none text-sm"
              />
            </div>
          ) : (
            <FaSearch
              className="text-base cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          )}
          <button className="flex items-center gap-2 text-xs font-medium border border-white rounded-lg px-3 py-2 hover:bg-white hover:text-yellow-950 transition-colors duration-200 cursor-pointer">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Services Dropdown */}
      {servicesOpen && (
        <div className="absolute top-full left-0 right-0 mx-20 bg-[#643F2E] rounded-b-lg text-white p-8 z-40 grid grid-cols-1 md:grid-cols-4 gap-6 max-md:mx-4">
          {[
            [
              "Legal Consultation Service",
              "Foreign Investment Service",
              "Contracts",
              "Notarization",
              "Insurance",
            ],
            [
              "Defense in All Cases",
              "Banks and Financial Institutions",
              "Corporate Governance Services",
              "Companies Liquidation",
              "Internal Regulations for Companies",
            ],
            [
              "Services for Companies and Institutions",
              "Arbitration",
              "Intellectual Property",
              "Corporate Restructuring and Reorganization",
            ],
            [
              "Establishing National and Foreign Companies",
              "Commercial Agencies",
              "Supporting Vision 2030",
              "Estates",
            ],
          ].map((col, i) => (
            <ul key={i} className="space-y-2">
              {col.map((item) => (
                <li
                  onClick={() => {
                    setServicesOpen(false);
                    router.push("/ServiceDetails");
                  }}
                  key={item}
                  className="hover:opacity-80 rounded-md px-2 py-1 transition-opacity duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
