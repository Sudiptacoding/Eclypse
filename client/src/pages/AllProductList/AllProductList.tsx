import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Make sure React Router is installed

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  color: string;
};

function AllProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://eclypse.onrender.com/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-black text-white shadow-md rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer border-gray-800 border">
              <img
                src={product.images[0] || "/placeholder.png"}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-300 truncate capitalize">
                  {product.name}
                </h2>
                <p className="mt-2 text-gray-500 text-sm line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-indigo-600">
                    ${product.price}
                  </p>
                  <button
                    className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation if clicked
                      alert(`Add ${product.name} to cart`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AllProductList;
