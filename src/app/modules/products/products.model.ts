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
    productId: { type: Number, default:1 , unique: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    ratings: [ratingsSchema],
    description: { type: String, required: true },
    policy: { type: String, required: true },
    status: { type: String, enum: ['draft', 'active', 'archived'], default: 'draft' },
    category: String,
    tags: [String],
    featured: { type: Boolean, default: false },
    
  },
  {
    timestamps: true,
  },
);



export const ProductModel = model<TProducts>('Product', productsSchema);
