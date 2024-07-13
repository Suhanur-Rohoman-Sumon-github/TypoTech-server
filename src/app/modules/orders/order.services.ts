import { TProducts } from "../products/products.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDb = async (payload: TProducts) => {
    
    const result =  await OrderModel.create(payload);
    
    return result;
  };

  export const orderService = {
    createOrderIntoDb
  }