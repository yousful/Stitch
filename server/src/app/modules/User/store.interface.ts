import { ObjectId } from 'mongoose'
import { Document } from 'mongoose'
export interface TStore extends Document {
  name: string
  about: string
  addresses: JSON
  staffs: JSON,
  logo: string,
  servicesOffered: JSON,
  socialMediaHandles: JSON,
  phoneNumbers: JSON,
  openingHours: string,
  createdBy: ObjectId,
}
