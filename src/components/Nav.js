import React, { useState } from "react";
import logo from "../assets/Easy-convert-logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "PDF and Document Tools",
      submenu: [
        { title: "PDF Compressor", link: "/pdfCompressor" },
        { title: "PDF to Word", link: "/pdfToWord" },
        { title: "Word to PDF", link: "/wordToPdf" },
        { title: "Merge PDF", link: "/pdfMerge" },
        { title: "PDF Split", link: "/pdfSplit" },
        { title: "PDF Watermark Adder", link: "/pdfWatermarkAdder" },
      ],
    },
    {
      name: "Image Tools",
      submenu: [
        { title: "Image Compressor", link: "/imageCompressor" },
        { title: "JPEG to PNG", link: "/jpegToPng" },
        { title: "PNG to JPG", link: "/png-jpg-converter" },
        { title: "PNG transparent background remover", link: "/pngTransparentBackground" },
        { title: "Background Blur", link: "/backgroundBlur" },
        { title: "Image resizer", link: "/imageResizer" },
      ],
    },
    {
      name: "Media Converters",
      submenu: [
        { title: "YouTube to MP3", link: "/youtubeTomp3" },
        { title: "YouTube to MP4", link: "/youtubeTomp4" },
        { title: "Youtube Playlist Downloader", link: "/youtubePlaylist" },
        { title: "TikTok Downloader", link: "/tiktokDown" },
        { title: "Instagram Reel Downloader", link: "/instaReelDown" },
        { title: "Facebook Video Downloader", link: "/fbVideoDown" },
      ],
    },
    {
      name: "Audio & Music Tools",
      submenu: [
        { title: "Audio Cutter/ Trimmer", link: "#" },
        { title: "Audio Joiner/ Merger", link: "#" },
        { title: "Audio Normalizer", link: "#" },
        { title: "Text to Speech", link: "#" },
        { title: "Podcast ID3 tag editor", link: "#" },
        { title: "Audio Format Converter", link: "#" },
      ],
    },      
    {
      name: "Text and Writing Tools",
      submenu: [
        { title: "Plagiarism Checker", link: "#" },
        { title: "Word Counter & Character Counter", link: "#" },
        { title: "Grammar & Spell Checker", link: "#" },
        { title: "Readability Score Analyzer", link: "#" },
      ],
    },
    {
      name: "Social Media Tools",
      submenu: [
        { title: "Instagram Username Availability check", link: "#" },
        { title: "Twitter handle availability Check", link: "#" },
        { title: "Social Media post scheduler", link: "#" },
        { title: "Hastag Generator", link: "#" },
        { title: "Social post previewer", link: "#" },
        { title: "LinkedIn Profile analyzer", link: "#" },
        { title: "Tiktok trend finder", link: "#" },
        { title: "Youtube tag & keyword extractor", link: "#" },
      ],
    },
    {
      name: "Security & Privacy",
      submenu: [
        { title: "Password Strength Checker", link: "#" },
        { title: "Hash Generator", link: "#" },
        { title: "Text encrypt/Decrypt", link: "#" },
        { title: "Two-factor code generator", link: "#" },
        { title: "DAta leak checker", link: "#" },
        { title: "VPN vs Proxy explainer", link: "#" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img src={logo} alt="Easy Convert" className="h-20 w-auto cursor-pointer" />
            </Link>
          </div>
          

          {/* Nav Items */}
          <div className="hidden sm:flex space-x-6">
            
            {menuItems.map((item, index) => {
              const isHiddenOnMd = index >= Math.ceil(menuItems.length / 2);
              return (
              <div
                key={index}
                className={`relative ${isHiddenOnMd ? "hidden md:hidden lg:block" : ""}`}
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="px-3 py-2 text-md font-medium text-black hover:text-blue-400">
                  {item.name}
                </button>

                {/* Mega Menu */}
                {openMenu === index && (
                  <div className={`absolute ${ index >= menuItems.length -2 ? "right-0" : "left-0"}  top-full w-[500px]  bg-white text-gray-800 shadow-2xl border rounded-2xl p-6 grid grid-cols-2 gap-4 z-50`}>
                    {item.submenu.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.link}
                        className="block hover:text-blue-400"
                      >
                        {sub.title}
                      </Link>

                    ))}
                  </div>
                )}
              </div>
            )})}
          </div>          
          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>{/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-blue-500 font-medium"
            >
              About
            </Link>
            <Link
              to="/pdfToWord"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-blue-500"
            >
              PDF to Word
            </Link>
            <Link
              to="/png-jpg-converter"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-blue-500"
            >
              PNG to JPG
            </Link>
            <Link
              to="/youtubeTomp3"
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-blue-500"
            >
              YouTube to MP3
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
