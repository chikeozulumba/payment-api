import { Router } from 'express'
import { addPurchase, findPurchase, requestParamsValidation } from '../middlewares'
import PurchaseController from '../controllers/purchase'


const route = Router()

export default (app: Router) => {
  app.use('/purchases', route)

  route.post(
    '/',
    (...args) => requestParamsValidation(undefined, addPurchase)(...args),
    PurchaseController.createPurchase,
  )

  route.get(
    '/:id?',
    (...args) => requestParamsValidation(findPurchase)(...args),
    PurchaseController.getPurchase,
  )

  route.delete(
    '/:id?',
    (...args) => requestParamsValidation(findPurchase)(...args),
    PurchaseController.deletePurchase,
  )
}