import { model, Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productsSchema = new Schema<TProducts>({
    image:{type:String,required:true},
    title:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    ratings:[String]
},
{
    timestamps:true
}
)

export const ProductModel = model<TProducts>('product', productsSchema);