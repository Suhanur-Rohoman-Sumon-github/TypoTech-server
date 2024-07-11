import express from 'express';
import { cartControllers } from './cart.controllers';

const router = express.Router();

router.post('/', cartControllers.createProductsCart);
router.get('/', cartControllers.getAllCartsFromDb);
router.get('/:userId', cartControllers.getSinglePersonCats);
router.get('/' ,cartControllers.getUserId)
router.delete('/' ,cartControllers.getUserId)


export const cartRoute = router;
