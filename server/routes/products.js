import express from "express";
import { getProducts } from "../controller/product.js";

//import router
const router = express.Router();

//init router ( all routes here are starting with "/users" ("/"))
router.get("/", getProducts);

export default router;
