import { Document } from 'mongoose'
export interface TUserMeasurement extends Document {
  url: string
  owner: string
}
