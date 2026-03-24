import { useParams } from "react-router-dom";
import productCategories from "../data/productCategories";
import { useCart } from "../CartSection/CartContext";
import { useToast } from "../data/ToastContext";
import { useNavigate } from "react-router-dom";

function CategoryPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

    const handleAddToCart = (product) => {
    addToCart(product);

    showToast("Product added to cart!", () => navigate("/cart"));
  };

  const category = productCategories.find((cat) => cat.slug === slug);

  if (!category) {
    return <p className="text-center mt-10">Category not found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
        {category.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-heading text-lg font-semibold text-gray-900">
                {product.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 flex-1">
                {product.description}
              </p>

              <p className="text-gray-900 font-bold text-lg mt-4">
                Ghc{product.price}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-6 bg-gray-300 text-gray-800 hover:scale-105 font-bold py-2 rounded-lg hover:bg-accent transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
