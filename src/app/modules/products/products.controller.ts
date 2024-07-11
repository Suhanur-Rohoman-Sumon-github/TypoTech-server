import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendRespone';
import { productsServices } from './products.services';
const createProducts = catchAsync(async (req, res) => {
  const result = await productsServices.crateBookingInDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products created successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productsServices.getAllProductsFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All products retrieve successfully',
    data: result,
  });
});
const getSingleProducts = catchAsync(async (req, res) => {
  const result = await productsServices.getSingleProductsFromDb(
    req.params.id as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single products retrieve successfully',
    data: result,
  });
});

export const productsControllers = {
  createProducts,
  getAllProducts,
  getSingleProducts,
};
