import express from "express";
import {
  getProducts,
  getProduct,
  insertProduct,
  upadteProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/product/:id", getProduct);

router.post("/product", insertProduct);

//upadte product

router.put("/product/:id", upadteProduct);

router.delete("/product/:id", deleteProduct);

export default router;
