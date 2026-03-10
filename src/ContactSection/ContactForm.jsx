import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "f044d78b-082b-4ce7-b170-263af5bead0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      e.target.reset();
    } else {
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="
          w-full 
          max-w-lg 
          bg-gray-600
          shadow-lg 
          rounded-xl 
          p-6 
          sm:p-8 
          space-y-6
        "
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 leading-snug">
          Do you have any question or something to say?
          <span className="block text-amber-300 font-bold">
            We’re here for you.
          </span>
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              w-full 
              px-4 
              py-3 
              border 
              border-gray-300 
              rounded-lg 
              focus:ring-2 
              focus:ring-amber-300 
              focus:outline-none
              text-sm sm:text-base
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              w-full 
              px-4 
              py-3 
              border 
              border-gray-300 
              rounded-lg 
              focus:ring-2 
              focus:ring-amber-300 
              focus:outline-none
              text-sm sm:text-base
            "
          />

            <input
            name="Phone number"
            placeholder="Your Number"
            required
            className="
              w-full 
              px-4 
              py-3 
              border 
              border-gray-300 
              rounded-lg 
              focus:ring-2 
              focus:ring-amber-300 
              focus:outline-none
              text-sm sm:text-base
            "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="
              w-full 
              px-4 
              py-3 
              border 
              border-gray-300 
              rounded-lg 
              focus:ring-2 
              focus:ring-amber-300 
              focus:outline-none
              text-sm sm:text-base
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full 
            bg-amber-300 
            text-black
            font-bold 
            py-3 
            rounded-lg 
            hover:bg-amber-400 
            transition
            text-sm sm:text-base
          "
        >
          Send Message
        </button>

        <p className="text-center text-sm text-gray-700">{result}</p>
      </form>
    </div>
  );
}
