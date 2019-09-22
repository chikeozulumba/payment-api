import { Request, Response } from 'express'
import Service from '../../services/ProductService'
import { CREATED } from 'http-status-codes';

class ProductContoller {
  public async createProduct(req: Request, res: Response) {
    const data = await Service.create(req.body);
    return res.status(CREATED).json(data);
  }
}

export default new ProductContoller()