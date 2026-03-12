import { useCart } from "./CartContext";
import Checkout from "./PaymentCheckout";
import PaystackButton from "./PaystackButton";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
        Your Cart
      </h2>

      {cart.length === 0 && (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty.
        </p>
      )}
    
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 border border-gray-100"
          >
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                Qty: {item.qty}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-semibold text-gray-900">
                Ghc{item.price * item.qty}
              </span>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-medium transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    
      {cart.length > 0 && (
        <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-inner">
          <div className="flex justify-between text-xl font-semibold text-gray-900 mb-6">
            <span>Total</span>
            <span>Ghc{total}</span>
          </div>

          <button
            onClick={clearCart}
            className="
              w-full bg-red-600 text-white py-3 rounded-lg
              font-medium shadow hover:bg-red-700 transition
            "
          >
            Clear Cart
          </button>
          <div>
              <Checkout />
          </div>
        </div>
        
      )}
    </section>
  );
}

export default Cart;