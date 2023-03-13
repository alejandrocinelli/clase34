import { Router } from "express";
import {productsController} from "../controllers/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Usuario visita /products para ver los productos ");
}   );

router.get("/products", productsController.getProduct);
// ruta que busca producto por id

router.get("/products/:id", productsController.getProductsById ) 

router.get("*", productsController.errorRequest)

export default router;