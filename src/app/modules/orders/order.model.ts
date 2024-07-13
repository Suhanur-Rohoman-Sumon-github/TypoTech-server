import mongoose, { Schema, Document, Model, Types } from 'mongoose';
import { TCharges,  TContactInformation,  TOrders } from './order.interface';


const InformationSchema = new Schema<TContactInformation>({
  address:{ type: String, required: true },
  city:{ type: String, required: true },
  email:{ type: String, required: true },
  firstName:{ type: String, required: true },
  lastName:{ type: String, required: true },
  zip:{ type: String, required: true },
});
const ChargesSchema: Schema = new Schema<TCharges>({
 shipping:{ type: Number, required: true },
 subtotal:{ type: Number, required: true },
 tax:{ type: Number, required: true },
 total:{ type: Number, required: true }
});


const OrderSchema = new Schema<TOrders>({
  orderID: { type: String },
  products: { type: [Schema.Types.ObjectId], ref: 'product', required: true },
  status: { type: String, enum: ['Fulfilled', 'Declined'],default: 'Fulfilled' },
  shippingInformation: { type: InformationSchema, required: true },
  paymentType: { type: String, required: true },
  charges:ChargesSchema
},
{timestamps:true}
);


export const OrderModel: Model<TOrders> = mongoose.model<TOrders>('order', OrderSchema);
