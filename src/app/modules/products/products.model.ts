import { model, Schema } from 'mongoose';
import { TProducts, TRatings } from './products.interface';
import AppError from '../../error/AppEroor';
import httpStatus from 'http-status';

const ratingsSchema = new Schema<TRatings>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  {
    _id: false,
  },
);

const productsSchema = new Schema<TProducts>(
  {
    productsId: { type: Number, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    ratings: [ratingsSchema],
    descriptions: { type: String, required: true },
    policy: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

productsSchema.pre('save', async function (next) {
  const products = this;
  const isProductsExists = await ProductModel.findOne({
    productsId: products.productsId,
  });

  if (isProductsExists) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'products already exists',
    );
  }
});

export const ProductModel = model<TProducts>('product', productsSchema);
