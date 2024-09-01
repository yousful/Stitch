import { Schema, model } from 'mongoose'
import { TUserAddress } from './address.interface'

// Schema Definition
const addressSchema = new Schema<TUserAddress>(
  {
    content: {
      type: String,
      required: true,
    },
    typeOfAddress: {
      type: String,
    },
    userId: {
      type: String,
      ref: 'User',
      // as: 'user-addresses',
    },
  },
  {
    timestamps: true,
  },
)

// Creating the model
const Address = model<TUserAddress>('Address', addressSchema)

export default Address
