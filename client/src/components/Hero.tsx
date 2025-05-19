import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full px-5">
      <div className="flex items-center justify-between pt-20">
        <img className="w-56" src="./image/Hero_header.png" alt="hero" />
        <div className="text-white text-xl">© 2025</div>
      </div>

      <div className="relative w-full mx-auto pt-5">
        <img
          src="./image/Hero_mp4-Photoroom.png"
          alt="Your Image"
          className="w-full h-auto rounded-lg object-cover "
        />

        <div className="absolute bottom-4 right-4  text-white text-sm md:text-3xl px-4 py-2 ">
          A silhouette worth remembering
        </div>
      </div>

      <div className=" py-24">
        <p className="text-3xl text-white max-w-xl leading-snug break-words pb-10">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>

        <button className="group flex items-center bg-black text-white px-4 py-2 transition-all duration-300 border-b hover:bg-white hover:text-black overflow-hidden">
          <span className="transform transition-transform duration-300 group-hover:translate-x-2">
            Learn more about Eclypse
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 transition-opacity duration-300 group-hover:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M7 7h10v10"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-end">
        <Link to="/allproducts">
          <button className="group flex items-center bg-black text-white px-4 py-2 transition-all duration-300 border-b hover:bg-white hover:text-black overflow-hidden">
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              Browse Full Collection
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2 transition-opacity duration-300 group-hover:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
