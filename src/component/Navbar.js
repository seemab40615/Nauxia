import React, {  useState } from "react";
import logo from "../images/logo.svg";
import nauxialogo from "../images/Union.svg";
import { useNavigate } from 'react-router-dom';

import micOnIcon from '../images/music_on.png';
import micOffIcon from '../images/music_off.png';

export default function Navbar({className}) {
  
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  const handleMic = () => {
    const audio = document.getElementById('audio');
    // audio.muted = true;
    // audio.pause();
    if (audio.paused) {
      audio.play();
      setIsAudioPlaying(true);
    } else {
      audio.pause();
      setIsAudioPlaying(false);
    }
  };


  return (
    <nav
      className={` text-white flex justify-between items-center py-0 sm:py-4 px-5 sm:px-10 backdrop-blur-sm nav-border z-50 fixed w-[100%] ${className || 'bg-[rgba(73, 73, 73, 0.02)'}`}    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="hidden sm:block h-8 mr-2 cursor-pointer" onClick={handleClick} />
        <img
          src={nauxialogo}
          alt="Logo"
          className="block sm:hidden mr-2 h-[70px] cursor-pointer"
          onClick={handleClick}
        />
      </div>

      {/* Buttons */}
      <div className="flex font-jura">
        <button onClick={handleMic} className="border border-transparentWhite hover:bg-blue-600 text-white font-semibold p-2.5 mr-4 font-bold zero:hidden smd:block">
          <img src={isAudioPlaying ? micOffIcon : micOnIcon} alt="Mic Icon" />
        </button>
        <a href="https://twitter.com/nauxia4060" className=" border border-transparentWhite hover:bg-blue-600 text-white font-semibold py-[3px] sm:py-1 px-3 mr-4 font-bold">
          TWITTER
        </a>
        <button className="hidden sm:block border border-transparentWhite hover:bg-green-600 text-transparentWhite font-semibold py-1 px-3 line-through font-bold">
          DISCORD
        </button>
      </div>
    </nav>
  );
}
