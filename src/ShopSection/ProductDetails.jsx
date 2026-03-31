import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
<section className="max-w-6xl mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* LEFT COLUMN — IMAGE */}
    <div className="w-full flex items-center justify-center">
      <Zoom>
        <div className="w-full max-h-[600px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full"
          />
        </div>
      </Zoom>
    </div>

    {/* RIGHT COLUMN — DETAILS */}
    <div className="flex flex-col justify-start">
      <h1 className="text-3xl font-bold">{product.title}</h1>

      <p className="text-gray-700 mt-4 leading-relaxed">
        {product.description}
      </p>

      <div className="mt-4">
        <strong>Sizes:</strong> {product.size.join(", ")}
      </div>

      <div className="mt-2">
        <strong>Material:</strong> {product.material}
      </div>

      <p className="text-3xl font-semibold mt-6 text-brand">
        Ghc{product.price}
      </p>
    </div>

  </div>
</section>
  );
}

export default ProductDetails;