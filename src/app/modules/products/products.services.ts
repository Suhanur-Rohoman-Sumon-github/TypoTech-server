import { TProducts } from "./products.interface";
import { ProductModel } from "./products.model";

const crateBookingInDb = async (payload:TProducts) => {
const result = ProductModel.create(payload)
return result
}

const getAllProductsFromDb = async () => {
    const result = await ProductModel.find()
      
    return result;
  };

export const productsServices = {
    crateBookingInDb,
    getAllProductsFromDb
}