import { Router } from 'express';
import { productRoute } from '../modules/products/products.route';
import { cartRoute } from '../modules/cart/cart.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/carts',
    route: cartRoute,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
