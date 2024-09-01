import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ProductController } from './product.controller'
import { ProductValidation } from './product.validation'
import authGuard from '../../middlewares/authGuard'

const router = express.Router()

router.post(
  '/add-update',
  authGuard(),
  validateRequest(ProductValidation.productValidationSchema),
  ProductController.createProduct,
);

router.get(
  '/me',
  authGuard(),
  ProductController.getAllMyProducts,
);

router.get(
  '/all-products',
  ProductController.getAllProducts,
);
router.get(
  '/products-categories',
  ProductController.getAllProductsCategories,
);


// export user routes
export const ProductRoutes = router;
