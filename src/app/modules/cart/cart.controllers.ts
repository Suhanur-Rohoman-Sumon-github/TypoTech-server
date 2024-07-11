import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespone";
import { cartServices } from "./cart.services";

const createProductsCart = catchAsync(async (req, res) => {
    const result = await cartServices.createProductsCartIntoDb(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products added successfully',
      data: result,
    });
  });
const getAllCartsFromDb = catchAsync(async (req, res) => {
    const result = await cartServices.getCardsFromDb;
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'all cards details retrieve successfully',
      data: result,
    });
  });
const getSinglePersonCats = catchAsync(async (req, res) => {
console.log(req.params.userId);
    const result = await cartServices.getSinglePersonCatsFromDb(req.params.userId as string);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single Person cart details retrieve successfully',
      data: result,
    });
  });
const getUserId = catchAsync(async (req, res) => {

    const result = await cartServices.getUserIdFromDb(req.params.id as string);

  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user id retrieve successfully',
      data: result,
    });
  });
const deleteProducts = catchAsync(async (req, res) => {

    const result = await cartServices.getUserIdFromDb(req.params.id as string);

  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'products deleted successfully',
      data: result,
    });
  });


  export const cartControllers = {
    createProductsCart,
    getAllCartsFromDb,
    getSinglePersonCats,
    getUserId,
    deleteProducts
  }