
import { Router, Request, Response, NextFunction } from 'express'
import { addProduct, findProduct, requestParamsValidation, updateProduct } from '../middlewares'
import PurchaseController from '../controllers/purchase'


const route = Router()

export default (app: Router) => {
  app.use('/purchase', route)

  route.post(
    '/',
    (...args) => requestParamsValidation(undefined, addProduct)(...args),
    PurchaseController.createPurchase,
  )
}