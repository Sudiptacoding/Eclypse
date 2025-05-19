const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const products = require("./data/products.json");

app.use(cors());
app.use(express.json());

// Dummy API route
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

app.get("/", (req, res) => {
  res.send("✅ Eclypse backend is running.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// https://eclypse.onrender.com/
// https://eclypse-seven.vercel.app/
