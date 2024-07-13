

import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { ProductsSearchableFields } from './products.const';
import { TProducts } from './products.interface';
import { ProductModel } from './products.model';

const crateBookingInDb = async (payload: TProducts) => {
  const result = ProductModel.create(payload);
  return result;
};

const getAllProductsFromDb = async (query: Record<string, unknown>) => {
  const ProductsQuery = new QueryBuilder(ProductModel.find(), query)
    .search(ProductsSearchableFields)
    .filter()
    .sort()
    .fields()
    .paginate();

  const result = await ProductsQuery.modelQuery;

  return result;
};
const getSingleProductsFromDb = async (id: string) => {
  
  const result = await ProductModel.findById(id);

  return result;
};
const deleteProductsFromDb = async (id: string) => {
  const result = await ProductModel.deleteOne({_id:new mongoose.Types.ObjectId(id)});

  return result;
};
const updateProductFromDb = async (id: string, payload: Partial<TProducts>) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true, runValidators: true }
  );
  console.log(result);

  return result;
};

export const productsServices = {
  crateBookingInDb,
  getAllProductsFromDb,
  getSingleProductsFromDb,
  deleteProductsFromDb,
  updateProductFromDb
};
