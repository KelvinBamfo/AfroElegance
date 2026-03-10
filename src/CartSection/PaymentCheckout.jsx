import { useState } from "react";
import PaystackButton from "./PaystackButton";

export default function Checkout() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    amount: 0,
  });

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
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold">Checkout</h2>

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
        type="number"
        placeholder="Amount (GHS)"
        className="w-full border px-4 py-2 rounded"
        onChange={(e) => setCustomer({ ...customer, amount: Number(e.target.value) })}
      />

      <PaystackButton
        name={customer.name}
        email={customer.email}
        amount={customer.amount}
        onSuccess={handleSuccess}
      />
    </div>
  );
}

