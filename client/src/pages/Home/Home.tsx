import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import FeaturedSection from "../../components/FeaturedSection";

import ShoppingCard from "../../components/ShoppingCard";
import AccordionSection from "../../components/AccordionSection";
import CustomerReview from "../../components/CustomerReview";

type Product = {
  name: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
};
function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://eclypse.onrender.com/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="bg-black">
      <Hero></Hero>
      <FeaturedSection></FeaturedSection>
      <div>
        {products.length === 0 ? (
          <p className="text-center mt-10">Loading products...</p>
        ) : (
          <div>
            <p className="text-3xl text-white max-w-xl leading-snug break-words py-32 px-5">
             Silhouette No. 1 - Vermilion
            </p>
            <ShoppingCard product={products[8]} />
          </div>
        )}
      </div>
      <AccordionSection></AccordionSection>
      <div className="text-gray-400 text-xl px-10 font-medium  tracking-[.25em] pt-20 pb-12">OUR CUSTOMERS</div>
      <CustomerReview></CustomerReview>
    </div>
  );
}

export default Home;
