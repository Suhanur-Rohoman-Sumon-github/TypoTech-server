import { TProducts } from "./products.interface";
import { ProductModel } from "./products.model";

const crateBookingInDb = async (payload:TProducts) => {
const result = ProductModel.create(payload)
return result
}

export const productsServices = {
    crateBookingInDb
}