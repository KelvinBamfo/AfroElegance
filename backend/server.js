import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import paystackRoutes from "./routes/paystack.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/paystack", paystackRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
