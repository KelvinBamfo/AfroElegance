import { PaystackButton } from "react-paystack";
import { useCart } from "../CartSection/CartContext";

function Checkout() {
  const { cart, total } = useCart();
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const componentProps = {
    email: "customer@example.com",
    amount: total * 100, // Paystack uses pesewas
    currency: "GHS",
    metadata: { cart },
    publicKey,
    text: "Pay with Paystack",
    onSuccess: () => alert("Payment Successful!"),
    onClose: () => alert("Payment Cancelled."),
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

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
