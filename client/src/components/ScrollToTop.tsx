import React, { useEffect, useState } from "react";

import { IoArrowUpOutline } from "react-icons/io5";


const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 2000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-white text-black hover:bg-gray-300 transition p-3 rounded-full shadow-lg"
        aria-label="Scroll to top"
      >
      <IoArrowUpOutline />
      </button>
    )
  );
};

export default ScrollToTop;
