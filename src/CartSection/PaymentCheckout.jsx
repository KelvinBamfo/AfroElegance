import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useCart } from "../CartSection/CartContext";

function Checkout() {
  const { cart, total } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    number: "",
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const handleSuccess = async (reference) => {
    try {
      const response = await fetch("http://localhost:5000/api/paystack/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Payment verified! Order completed.");
      } else {
        alert("Verification failed.");
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Something went wrong verifying payment.");
    }
  };

  const componentProps = {
    email: customer.email,
    amount: total * 100, // pesewas
    currency: "GHS",
    publicKey,
    text: "Pay Now",
    metadata: {
      customer_name: customer.name,
      customer_phone: customer.number,
      cart_items: cart,
    },
    onSuccess: handleSuccess,
    onClose: () => alert("Payment cancelled."),
  };

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Checkout</h2>

      {/* Customer Info */}
      <div className="bg-white p-4 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border px-4 py-2 rounded"
          onChange={(e) => setCustomer({ ...customer, number: e.target.value })}
        />
      </div>

      {/* Cart Summary */}
      <div className="bg-white p-4 rounded shadow">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.title}</span>
            <span>GHS {item.price}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>GHS {total}</span>
        </div>

        <PaystackButton
          {...componentProps}
          className="mt-6 w-full bg-yellow-700 hover:bg-yellow-800 text-white py-3 rounded-lg transition-colors"
        />
      </div>
    </section>
  );
}

export default Checkout;
