// import { model } from 'mongoose'
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import Address from './address.model'
import { User } from './user.model'
import Measurement from './userMeasurement.model'

const createStudentIntoDB = async () => {
  console.log('createStudentIntoDB')
  return 'createStudentIntoDB'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createUserAddress = async (body: any, userId: any) => {
  return Address.create({ ...body, userId })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createUserMeasurement = async (body: any, userId: any) => {
  return Measurement.create({ ...body, owner: userId })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetMe = async (userId: any) => {
  const user = await User.findById(userId).populate({
    path: 'store',
  })
  if (!user) {
    throw new AppError(
      httpStatus.NOT_ACCEPTABLE,
      'User not found',
    )
  }
  console.log(user.store)
  return user
}

export const UserServices = {
  createStudentIntoDB,
  createUserAddress,
  GetMe,
  createUserMeasurement,
}
