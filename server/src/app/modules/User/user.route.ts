import express from 'express'
import authGuard from '../../middlewares/authGuard'
import validateRequest from '../../middlewares/validateRequest'
import { USER_ROLE } from './user.constant'
import { UserControllers } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '',
  authGuard(USER_ROLE.admin),
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);

// export user routes
export const UserRoutes = router
