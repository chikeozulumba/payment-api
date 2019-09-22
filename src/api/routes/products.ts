
import { Router, Request, Response, NextFunction } from 'express'
import { addProduct, findProduct, requestParamsValidation, updateProduct } from '../middlewares'
import ProductController from '../controllers/product'


const route = Router()

export default (app: Router) => {
  app.use('/products', route)

  route.post(
    '/',
    (...args) => requestParamsValidation(undefined, addProduct)(...args),
    ProductController.createProduct,
  )
  
  route.get(
    '/:id?',
    (...args) => requestParamsValidation(findProduct)(...args),
    ProductController.findProduct,
  )
  
  route.put(
    '/:id',
    (...args) => requestParamsValidation(findProduct, updateProduct)(...args),
    ProductController.updateProduct,
  )
  
  route.delete(
    '/:id',
    (...args) => requestParamsValidation(findProduct)(...args),
    ProductController.deleteProduct,
  )
}