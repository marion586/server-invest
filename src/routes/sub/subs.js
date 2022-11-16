import express from "express";

import User from "../../models/user.js";
import { stripe } from "../../Utils/stripe.js";

const router = express.Router();

router.get("/prices", async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });
  return res.json(prices);
});

export default router;
