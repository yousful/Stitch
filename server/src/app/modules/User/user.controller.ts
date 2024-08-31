import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

const createUser = catchAsync(async (req, res) => {
  console.log('createUser')

  const user = await UserServices.createStudentIntoDB()

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successfully',
    data: user,
  })
})

export const UserControllers = {
  createUser,
}
