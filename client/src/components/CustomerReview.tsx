import { useState } from "react";
import { FaCaretLeft } from "react-icons/fa";

type Review = {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string; // single main image per user
};

const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    text: "Amazing product! Really changed my workflow and productivity. Highly recommended to everyone.",
    image: "https://i.postimg.cc/q7ySL8Yr/Ellipse-3.png",
  },
  {
    id: 2,
    name: "Sara Lee",
    location: "London, UK",
    text: "The quality exceeded my expectations. Customer support was very helpful and prompt.",
    image:
      "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    name: "Akash Roy",
    location: "Dhaka, Bangladesh",
    text: "Good value for money. The delivery was fast and the product matches the description perfectly.",
    image: "https://i.postimg.cc/XJcKNgHs/smiling-young-man-illustration-1.png",
  },
];

const CustomerReview = () => {
  const [selectedReviewId, setSelectedReviewId] = useState(1);
  const selectedReview = reviews.find((r) => r.id === selectedReviewId)!;

  return (
    <div className="w-full mx-auto p-6 flex  md:flex-row px-2 md:px-10 border-b pb-16">
      {/* Left Side: Selected Review Details */}
      <div className="md:w-1/2 bg-black p-6 rounded-lg shadow-md flex flex-col items-start">
        <p className="text-white leading-relaxed text-center flex justify-start">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            ></path>
          </svg>
          {selectedReview.text}
        </p>
      
        <h3 className="text-xl font-bold text-gray-400 mb-1  pl-14 pt-14 tracking-[.25em]">
          {selectedReview.name}
        </h3>
        <p className="text-sm text-gray-400 mb-4 pl-14 tracking-[.25em]">{selectedReview.location}</p>
      </div>

      {/* Right Side: User Thumbnails */}
      <div className="md:w-1/2 flex flex-col items-end justify-center gap-6">
        {reviews.map((review) => {
          const isSelected = review.id === selectedReviewId;
          return (
            <div className="flex items-center">
              {isSelected && (
                <div className="text-white text-3xl">
                  <FaCaretLeft />
                </div>
              )}
              <button
                key={review.id}
                onClick={() => setSelectedReviewId(review.id)}
                className={`w-24 h-24 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  isSelected
                    ? " shadow-lg"
                    : " grayscale hover:grayscale-0 hover:border-indigo-500 opacity-25"
                }`}
                aria-label={`Select review by ${review.name}`}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReview;
