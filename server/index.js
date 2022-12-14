import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./routes/products.js";

//init express application
const app = express();

//specify port
const PORT = 5000;

//init bodyparser middleware
app.use(bodyParser.json());

//creating different routes
app.get("/", (req, res) => {
  res.send("hello from homepage");
});

app.use("/products", productRoutes);

//listen for incoming request
app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
