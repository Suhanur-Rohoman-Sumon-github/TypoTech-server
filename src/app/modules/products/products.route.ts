import express from "express"
import { productsControllers } from "./products.controller";
const router = express.Router()

router.post("/",productsControllers.createProducts)
router.get("/",productsControllers.getAllProducts)
router.get("/:id",productsControllers.getAllProducts)
router.get("/:id",productsControllers.getAllProducts)

export const productRoute = router ;