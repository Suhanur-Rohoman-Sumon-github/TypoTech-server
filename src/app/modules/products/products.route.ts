import express from 'express';
import { productsControllers } from './products.controller';
const router = express.Router();

router.post('/', productsControllers.createProducts);
router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getSingleProducts);
router.patch('/:id', productsControllers.updateProducts);
router.delete('/:id', productsControllers.deleteProducts);

export const productRoute = router;
