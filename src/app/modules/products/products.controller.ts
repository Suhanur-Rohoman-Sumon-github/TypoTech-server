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
  

  const result = await productsServices.getAllProductsFromDb(req?.query);

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
const deleteProducts = catchAsync(async (req, res) => {
  
  

  const result = await productsServices.deleteProductsFromDb(
    req.params.id as string,
  );

  

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single products retrieve successfully',
    data: result,
  });
});
const updateProducts = catchAsync(async (req, res) => {
  
  

  const result = await productsServices.updateProductFromDb(
    req.params.id as string,
    req.body
  );

  

  

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'products updated successfully',
    data: result,
  });
});

export const productsControllers = {
  createProducts,
  getAllProducts,
  getSingleProducts,
  deleteProducts,
  updateProducts
};
