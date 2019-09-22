import { Router, Request, Response, NextFunction } from 'express';
import { addProduct, requestParamsValidation } from '../middlewares';
import ProductController from '../controllers/product';


const route = Router();

export default (app: Router) => {
  app.use('/products', route);

  route.post(
    '/',
    (...args) => requestParamsValidation(undefined, addProduct)(...args),
    ProductController.createProduct,
  );
};