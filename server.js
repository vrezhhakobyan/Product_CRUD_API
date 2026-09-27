require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const productRoutes = require("./src/routes/productRoutes");
const { notFound, errorHandler } = require("./src/middleware/errorHandler");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Product CRUD API is running" });
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
