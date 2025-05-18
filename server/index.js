const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy API route
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 }
  ]);
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ Eclypse backend is running.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
