import mongoose, { Types } from "mongoose";
import { TCart } from "./cart.interface";
import { CartModel } from "./cart.model";

const createProductsCartIntoDb = async (payload: TCart) => {

    const isUserExists =  await CartModel.findOne({userId:payload.userId}).sort({ _id: -1 });
   

      if(!isUserExists){
        const lastCart = await CartModel.findOne().sort({ _id: -1 });

        let newUserId: string;
        if (lastCart && lastCart.userId) {
         
            const match = lastCart.userId.match(/^u-(\d+)$/);
            if (match && match[1]) {
                const lastUserIdNumber = parseInt(match[1], 10);
                newUserId = `u-${lastUserIdNumber + 1}`;
            } else {
                newUserId = 'u-1';
            }
        } else {
            newUserId = 'u-1';
        }
  
        const newPayload = { ...payload, userId: newUserId };
  
        const result = await CartModel.create(newPayload);
  
        return result;
      }else{
        const result = await CartModel.create(payload);
  
        return result; 
      }
  };

  const getCardsFromDb = async () =>{
    const result = await CartModel.find();

    return result;
  }
  const getSinglePersonCatsFromDb = async (id:string) =>{
    
    const result = await CartModel.find({userId:id});

    return result;
  }
  const getUserIdFromDb = async (id:string) =>{
    const result = await CartModel.findOne().select('userId').sort({ _id: -1 });
    return result;
  }
  const deleteCardProductsFromDb = async (id:string) =>{
    const result = await CartModel.deleteOne(  {_id :new mongoose.Types.ObjectId(id)});
    return result;
  }


  export const cartServices = {
    createProductsCartIntoDb,
    getCardsFromDb,
    getSinglePersonCatsFromDb,
    getUserIdFromDb,
    deleteCardProductsFromDb
  }