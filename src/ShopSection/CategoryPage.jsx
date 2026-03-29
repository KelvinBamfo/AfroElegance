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
  const otherCategories = productCategories.filter((cat) => cat.slug !== slug);


  if (!category) {
    return <p className="text-center mt-10">Category not found.</p>;
  }

  return (
    <>
    <section className="mt-7">
      <h3 className="text-2xl font-heading font-bold text-gray-900 m-3 mb-2">
        Explore Other Categories
      </h3>
      <div className="flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-0 gap-0.5">
        {otherCategories.map((cat) => (
          <div
            key={cat.slug}
          >
            <button
              onClick={() => navigate(`/productCategories/${cat.slug}`)}
              className="bg-gray-200 text-gray-700 font-medium px-4 py-1 rounded-2xl hover:bg-gray-300 hover:scale-105 hover:bg-accent shadow-md m-3 mb-1 hover:shadow-lg transition"
            >
              {cat.title}
            </button>
          </div>
        ))}
      </div>
    </section>
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

              <p className="text-gray-700 font-semibold text-lg mt-4">
                Ghc{product.price}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-6 bg-gray-200 text-gray-700 hover:scale-105 font-medium py-2 shadow-md rounded-2xl hover:bg-gray-300 hover:bg-accent transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default CategoryPage;