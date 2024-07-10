import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendRespone";
import { productsServices } from "./products.services";
const createProducts = catchAsync(async (req, res) => {
    const result = await productsServices.crateBookingInDb(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products created successfully',
      data: result,
    });
  });

  export const productsControllers = {
    createProducts
  }
  