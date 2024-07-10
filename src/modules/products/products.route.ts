import express from "express"
import { productsControllers } from "./products.controller";
const router = express.Router()

router.post("/",productsControllers.createProducts)

export const productRoute = router ;