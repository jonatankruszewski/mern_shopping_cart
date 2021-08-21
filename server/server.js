const express = require("express");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const connectDB = require("./config/db.js");

const app = express();
app.use(express.json());

const productRoutes = require("./routes/product.routes.js");
app.use("/api/products", productRoutes);

connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
