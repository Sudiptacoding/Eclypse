import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white px-4 pt-16 pb-10 mx-auto w-full  md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 grid-cols-3 md:grid-cols-4">
        {/* Logo and Navigation */}
        <div className="col-span-1 md:col-span-1">
          <img src="./image/Hero_header.png" alt="Brand Logo" className="h-10 mb-4" />
          <nav className="flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="/" className="hover:text-white transition">Home</a> /
            <a href="/about" className="hover:text-white transition">About</a> /
            <a href="/buy" className="hover:text-white transition">Buy</a> /
            <a href="/customer" className="hover:text-white transition">Customer</a> /
            <a href="/contact" className="hover:text-white transition">Contact</a> 
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm md:col-span-2 col-span-1">
          <p className="text-base font-bold tracking-wide text-white">Contact</p>
          <div className="flex">
           
            <a
              href="tel:850-123-5021"
              className="hover:text-white transition text-2xl"
            >
             +91 123-456-7890
            </a>
          </div>
          <div className=" pt-3">
            <span className="mr-1 text-gray-400">EMAIL</span> <br />
            <a
              href="mailto:info@lorem.mail"
              className="hover:text-white transition"
            >
             eclypse@gmail.com
            </a>
          </div>
   
        </div>

        {/* Copyright */}
        <div className="flex items-end justify-end  col-span-1">
         
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Eclypse
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
