import express from 'express';
import { cartControllers } from './cart.controllers';

const router = express.Router();

router.post('/', cartControllers.createProductsCart);
router.get('/', cartControllers.getAllCartsFromDb);

router.get('/id', cartControllers.getUserId);
router.delete('/:id', cartControllers.deleteCartProducts);
router.get('/:userId', cartControllers.getSinglePersonCats);

export const cartRoute = router;
