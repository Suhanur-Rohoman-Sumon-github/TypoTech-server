import { Types } from "mongoose";

export type TContactInformation = {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zip: string;
  };
export type TCharges ={
    subtotal:number ;
    shipping:number ;
    tax:number ;
    total:number ;
}

export type TOrders = {
    orderID:string ;
    products : Types.ObjectId[] ;
    status:'Fulfilled'|'Declined';
    shippingInformation :TContactInformation ;
    paymentType: string ;
    charges :TCharges
}