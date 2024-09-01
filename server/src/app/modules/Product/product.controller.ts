import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { ProductService } from './product.service'
import catchAsync from '../../utils/catchAsync'

const createProduct = catchAsync(async (req, res) => {
  const data = await ProductService.createProduct(req.body, req.user.id)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Product created successfully',
    data,
  })
})
const getAllProducts = catchAsync(async (req, res) => {
  const data = await ProductService.getAllProducts()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product fetched successfully',
    data,
  })
})
const getAllMyProducts = catchAsync(async (req, res) => {
  const data = await ProductService.getAllMyProducts(req.user.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product fetched successfully',
    data,
  })
})
const getAllProductsCategories = catchAsync(async (req, res) => {
  const data = await ProductService.getAllProductsCategories()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product categories fetched successfully',
    data,
  })
})

export const ProductController = {
  createProduct,
  getAllProducts,
  getAllMyProducts,
  getAllProductsCategories,
}
