import { useParams } from "react-router-dom";
import { products } from "../data/products";


function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">{product.title}</h1>

      <p className="text-gray-700 mt-4">{product.description}</p>

      <div className="mt-4">
        <strong>Sizes:</strong> {product.size.join(", ")}
      </div>

      <div className="mt-2">
        <strong>Material:</strong> {product.material}
      </div>

      <p className="text-2xl font-semibold mt-6">Ghc{product.price}</p>
    </section>
  );
}

export default ProductDetails;