import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/verify-payment", async (req, res) => {
  const { reference } = req.body;

  if (!reference) {
    return res.status(400).json({ error: "Missing payment reference" });
  }

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = response.data;

    if (data.status && data.data.status === "success") {
      return res.json({
        success: true,
        message: "Payment verified successfully",
        data: data.data,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error("Verification error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error verifying payment",
    });
  }
});

export default router;
