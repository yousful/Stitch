import { Schema, model } from 'mongoose'
import { TUserMeasurement } from './userMeasurement.interface'

// Schema Definition
const userMeasurementSchema = new Schema<TUserMeasurement>(
  {
    url: {
      type: String,
      required: true, // Add this if URL is mandatory
    },
    owner: {
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
const Measurement = model<TUserMeasurement>(
  'Measurement',
  userMeasurementSchema,
)

export default Measurement
