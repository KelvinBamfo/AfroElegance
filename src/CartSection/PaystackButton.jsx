import React from "react";

export default function PaystackButton({ amount, email, name, onSuccess }) {
  const paystackPublicKey = "pk_test_99a01cfaf69bba4b552da38cdd34e027fd9cc5ad";

  const handlePay = () => {
    const handler = window.PaystackPop.setup({
      key: paystackPublicKey,
      email: email,
      amount: amount * 100,
      currency: "GHS",
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: name
          }
        ]
      },
      callback: function (response) {
        onSuccess(response.reference);
      },
      onClose: function () {
        alert("Payment window closed.");
      }
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={handlePay}
      className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition"
    >
      Pay with Paystack
    </button>
  );
}
