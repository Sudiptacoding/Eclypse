import { useState } from "react";
import toast from "react-hot-toast";

type Product = {
  name: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
};

const ShoppingCard = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="max-w-6xl mx-auto bg-white  overflow-hidden mb-8 border-t-2 border-b-2 border-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Main Image */}
        <div className="w-full md:w-1/2 h-72 md:h-auto">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          {/* Product Name */}
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-gray-700  mb-5 leading-relaxed">
            {product.description}
          </p>

          {/* Thumbnails */}
          <div className="flex gap-4 mb-8 border-b border-gray-400 pb-10">
            {product.images.slice(1, 4).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`w-40 h-40 rounded-md overflow-hidden border-2 transition-shadow duration-300 ${
                  mainImage === img
                    ? "border-indigo-600 shadow-lg"
                    : "border-gray-300 hover:border-indigo-400"
                }`}
                aria-label={`Thumbnail ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Price */}
          <p className="text-3xl font-bold text-black mb-8">
            $ {product.price.toFixed(2)} <span className="text-sm text-gray-600">MRP incl. all taxes</span>
          </p>

          {/* Size */}
          <div className="mb-4 border-b border-gray-400 pb-10">
            <span className="font-bold text-gray-600 text-sm">Please Select a Size </span> <span className="underline text-gray-600 text-sm pl-6">Size chart</span>
            <div className="flex items-center mt-2 flex-wrap gap-2">
              {product?.sizes?.map((size, index) => (
                <button
                  key={index}
                  className="bg-neutral-700 text-white py-2 px-6  font-bold hover:bg-neutral-600 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 pt-10">
            <button onClick={() => toast.success('Successfully Add to card!')} className="flex-1 bg-white text-black py-4 rounded-md hover:bg-black hover:text-white transition border border-gray-500">
             Add to Card
            </button>
            <button onClick={() => toast.success('Successfully Buy now!')} className="flex-1 bg-black text-white py-4 rounded-md hover:text-black hover:bg-white transition hover:border">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
