import { Request, Response } from 'express'
import Service from '../../services/ProductService'
import { CREATED, NOT_FOUND, NO_CONTENT, OK, BAD_REQUEST, ACCEPTED } from 'http-status-codes';

class PurchaseContoller {
  public async createPurchase(req: Request, res: Response) {
    const data = await Service.create(req.body);
    return res.status(CREATED).json(data);
  }
}

export default new PurchaseContoller()