import express from 'express'
import { validate } from 'express-validation'
import AuthController from '../controllers/auth.controller'
import AuthMiddleware from '../middlewares/auth.middleware'
import AuthValidator from '../validators/auth.validator'
import { loginRateLimiter } from '../rate-limiters/authRateLimiter'

const router = express.Router()

router
  .route('/signin')
  .post(validate(AuthValidator.signin),  loginRateLimiter, AuthController.signin)
router.route('/signout').post(AuthMiddleware, AuthController.signout)
router.route('/me').get(AuthMiddleware, AuthController.me)

export default router
