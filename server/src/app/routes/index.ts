import { Router } from 'express'
import { UserRoutes } from '../modules/User/user.route'
import { AuthRoutes } from '../modules/Auth/auth.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
