import { Schema, model } from 'mongoose'
import { TProduct } from './product.interface'

// Schema Definition
const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    cost: {
      type: Number,
    },
    sizesAvailable: {
      type: JSON,
    },
    colorsAvailable: {
      type: JSON,
    },
    stylesAvailable: {
      type: JSON,
    },
    deliveryMode: {
      type: String,
    },
    categoryName: {
      type: String,
    },
    createdBy: {
      type: String,
      ref: 'User',
      as:'creator',
    },
  },
  {
    timestamps: true,
  },
)

// Creating the model
const Product = model<TProduct>('Product', productSchema)

export default Product
