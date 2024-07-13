import { Router } from 'express';
import { productRoute } from '../modules/products/products.route';
import { cartRoute } from '../modules/cart/cart.route';
import { PaymentsRoute } from '../modules/payments/payments.route';
import { OrderRoute } from '../modules/orders/order.route';

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
  {
    path: '/payment',
    route: PaymentsRoute,
  },
  {
    path: '/orders',
    route: OrderRoute,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
