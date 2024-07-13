import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespone";
import { orderService } from "./order.services";

const createOrder = catchAsync(async (req, res) => {
    
    const result = await orderService.createOrderIntoDb(req.body);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'order created successfully',
      data: result,
    });
  });

  export const orderControllers = {
    createOrder
  }