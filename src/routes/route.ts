import { Router } from 'express';
import { productRoute } from '../modules/products/products.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoute,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
