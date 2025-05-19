// function FeaturedSection() {
//   return (
//     <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 w-full">
//       {/* Image 1 */}
//       <div className="col-span-3 md:col-span-2 ">
//         <img
//           src="./image/Frame 3.png"
//           alt="Image 1"
//           className="w-full h-[100%] rounded-lg object-cover"
//         />
//       </div>

//       {/* Image 2 */}
//       <div className=" md:block md:col-start-3 ">
//         <img
//           src="./image/Frame 18.png"
//           alt="Image 2"
//           className="w-full md:h-[100%] h-1/2 rounded-lg object-cover"
//         />
//       </div>

//       {/* Image 3 */}
//       <div className="row-start-2">
//         <img
//           src="./image/Frame 18 (1).png"
//           alt="Image 3"
//           className="w-full md:h-[100%] h-1/2 rounded-lg object-cover"
//         />
//       </div>

//       {/* Image 4 */}
//       <div className="row-start-2">
//         <img
//           src="./image/Frame 18 (2).png"
//           alt="Image 4"
//           className="w-full md:h-[100%] h-1/2 rounded-lg object-cover"
//         />
//       </div>

//       {/* Image 5 - Hidden on mobile */}
//       <div className="hidden md:block row-start-2">
//         <img
//           src="./image/Frame 19.png"
//           alt="Image 5"
//           className="w-full h-[100%] rounded-lg object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// export default FeaturedSection;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define the Product type
type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  color: string;
};

function FeaturedSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://eclypse.onrender.com/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 w-full">
      {/* Image 1 */}
      <div className="col-span-3 md:col-span-2 ">
        <Link to={`/product/${products[0]?.id}`}>
          <img
            src={products[0]?.images[0] || "./image/Frame 3.png"}
            alt="Image 1"
            className="w-full h-[100%] rounded-lg object-cover hover:opacity-80 transition duration-300 cursor-pointer"
          />
        </Link>
      </div>

      {/* Image 2 */}
      <div className=" md:block md:col-start-3 ">
        <Link to={`/product/${products[1]?.id}`}>
          <img
            src={products[1]?.images[0] || "./image/Frame 3.png"}
            alt="Image 2"
            className="w-full md:h-[100%] h-1/2 rounded-lg object-cover hover:opacity-80 transition duration-300 cursor-pointer"
          />
        </Link>
      </div>


      {/* Image 3 */}
      <div className="row-start-2">
        <Link to={`/product/${products[2]?.id}`}>
          <img
            src={products[2]?.images[0] || "./image/Frame 3.png"}
            alt="Image 3"
            className="w-full md:h-[100%] h-1/2 rounded-lg object-cover hover:opacity-80 transition duration-300 cursor-pointer"
          />
        </Link>
      </div>

      {/* Image 4 */}
      <div className="row-start-2">
        <Link to={`/product/${products[3]?.id}`}>
          <img
            src={products[3]?.images[0] || "./image/Frame 3.png"}
            alt="Image 4"
            className="w-full md:h-[100%] h-1/2 rounded-lg object-cover hover:opacity-80 transition duration-300 cursor-pointer"
          />
        </Link>
      </div>

      {/* Image 5 - Hidden on mobile */}
      <div className="hidden md:block row-start-2">
        <Link to={`/product/${products[4]?.id}`}>
          <img
            src={products[4]?.images[0] || "./image/Frame 3.png"}
            alt="Image 5"
            className="w-full h-[100%] rounded-lg object-cover hover:opacity-80 transition duration-300 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
