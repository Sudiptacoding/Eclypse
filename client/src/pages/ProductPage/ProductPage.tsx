import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  color: string;
};

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://eclypse.onrender.com/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then((data: Product) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-white py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Error: {error}</p>;
  if (!product) return <p className="text-center text-white py-10">No product found</p>;

  return (
    <div className="bg-black py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Product Image */}
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-neutral-800 mb-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={product.images[0] || "/placeholder.png"}
                alt={product.name}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button onClick={() => toast.success('Successfully Add to card!')} className="w-full bg-white text-black py-2 px-4 rounded-full font-bold hover:bg-gray-300 transition">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button onClick={() => toast.success('Successfully Add to Wishlist!')} className="w-full bg-neutral-700 text-white py-2 px-4 rounded-full font-bold hover:bg-neutral-600 transition">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:flex-1 px-4 text-white">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-neutral-300 text-sm mb-4">{product.description}</p>

            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-white">Price:</span>
                <span className="text-neutral-300"> ${product.price}</span>
              </div>
              <div>
                <span className="font-bold text-white">Availability:</span>
                <span className="text-green-400 ml-1">In Stock</span>
              </div>
            </div>

            {/* Color */}
            <div className="mb-4">
              <span className="font-bold text-white">Color:</span>
              <div className="flex items-center mt-2">
                <div
                  className=" rounded-full border border-white shadow text-sm p-3"
                  style={{ backgroundColor: product.color }}
                >{product.color}</div>
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <span className="font-bold text-white">Select Size:</span>
              <div className="flex items-center mt-2 flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="bg-neutral-700 text-white py-2 px-4 rounded-full font-bold hover:bg-neutral-600 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Description */}
            <div>
              <span className="font-bold text-white">Product Description:</span>
              <p className="text-neutral-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
