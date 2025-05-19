import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    // <nav className="w-full fixed top-0 z-50 bg-black backdrop-blur-md shadow-md px-6 py-4 flex items-center justify-between">
    //   {/* Left - Logo */}
    //   <div className="text-xl font-bold text-green-700">
    //     <img className="w-11" src="./image/Frame 19.png" alt="Logo" />
    //   </div>

    //   {/* Center + Right - Nav Links + Button */}
    //   <div className="flex items-center space-x-6 text-white gap-4 font-medium">
    //     <a href="#" className="hover:text-green-500 transition">
    //       About Us
    //     </a>
    //     <a href="#" className="hover:text-green-500 transition">
    //       Waitlist
    //     </a>
    //     <a href="#" className="hover:text-green-500 transition">
    //       Cart
    //     </a>
    //     <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-orange-600 hover:text-white transition duration-300">
    //       Buy
    //     </button>
    //   </div>
    // </nav>
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black text-white sticky top-0 z-50">
      <div className="text-3xl font-bold tracking-wide p-2">
        <Link to="/">
          <img className="w-10" src="./image/Frame 19.png" alt="logo" />
        </Link>
      </div>
      <div className="space-x-10  md:flex items-center ">
        <a href="#" className="hover:text-orange-500">
          About Us
        </a>
        <a href="#" className="hover:text-orange-500">
          Waitlist
        </a>
        <a href="#" className="hover:text-orange-500">
          Cart
        </a>
        <a
          href="#"
          className="hover:bg-orange-500 bg-white text-black hover:text-white px-5 rounded-lg py-2"
        >
          Buy
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
