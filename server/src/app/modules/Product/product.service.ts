import Product from './product.model'
import { categories } from './products.constant'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createProduct = async (body: any, createdBy: any) => {
  if (body.productId) {
    const product = await Product.findById(body.productId)
    if (!product) {
      throw new Error('Product not found')
    }
    Object.assign(product, body)
    return product
  }
  return Product.create({ ...body, createdBy })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProducts = async () => {
  return Product.find({ quantity: { $gt: 0 } })
    .populate('createdBy')
    .exec()
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllMyProducts = async (userId: any) => {
  return Product.find({ createdBy: userId }).exec()
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProductsCategories = async () => {
  return categories
}

export const ProductService = {
  createProduct,
  getAllProducts,
  getAllMyProducts,
  getAllProductsCategories,
}
