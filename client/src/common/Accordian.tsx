import { useState } from "react";

type AccordionProps = {
  title: string;
  content: React.ReactNode;
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto  border-white border-b rounded-md overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 bg-black text-white focus:outline-none"
        aria-expanded={isOpen}
      >
        {/* Left side: Text */}
        <span className="text-2xl font-medium text-white">{title}</span>

        {/* Right side: Dropdown icon */}
        <svg
          className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Accordion content */}
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-black text-white ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
        aria-hidden={!isOpen}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
