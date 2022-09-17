import React from "react";
import bgHeader from "../images/bg-header-desktop.svg";
import bgMb from "../images/bg-header-mobile.svg";

const Navbar = () => {
  return (
    <div className="flex bg-[#5ca5a5] h-[156px] relative w-full">
      <img className="hidden md:flex w-full" src={bgHeader} />
      <img className="flex md:hidden w-full" src={bgMb} />
    </div>
  );
};

export default Navbar;
