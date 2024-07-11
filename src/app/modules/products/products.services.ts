import { TProducts } from './products.interface';
import { ProductModel } from './products.model';

const crateBookingInDb = async (payload: TProducts) => {
  const result = ProductModel.create(payload);
  return result;
};

const getAllProductsFromDb = async () => {
  const result = await ProductModel.find();

  return result;
};
const getSingleProductsFromDb = async (id: string) => {
  const result = await ProductModel.findById(id);

  return result;
};

export const productsServices = {
  crateBookingInDb,
  getAllProductsFromDb,
  getSingleProductsFromDb,
};
