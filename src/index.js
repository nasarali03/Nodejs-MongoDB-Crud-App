import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.json()); //for json data
app.use(express.urlencoded({ extended: false })); //for form data

app.use("/api", productRoutes);
//db connection
connectDB().then(() => {
  console.log("Mongodb Connected");
  app.listen(PORT, () => console.log(`Server is litening on port ${PORT}`));
});

//routes
app.get("/", (req, res) => {
  res.send("Hello from node api");
});
