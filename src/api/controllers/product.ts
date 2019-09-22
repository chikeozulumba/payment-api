import { Request, Response } from 'express'
import Service from '../../services/ProductService'
import { CREATED, NOT_FOUND, NO_CONTENT, OK, BAD_REQUEST } from 'http-status-codes';

class ProductContoller {
  public async createProduct(req: Request, res: Response) {
    const data = await Service.create(req.body);
    return res.status(CREATED).json(data);
  }

  public async findProduct(req: Request, res: Response) {
    const { params: { id }} = req
    const data = id ? await Service.findById(req.params.id) : await Service.find() 
    return res.status(data ? OK:NOT_FOUND).json({
      data: data || [],
    });
  }

  public async updateProduct(req: Request, res: Response) {
    const { nModified, ok } = await Service.update({ _id: req.params.id }, req.body)
    return res.status((nModified === 1 && ok === 1) ? NO_CONTENT:BAD_REQUEST).end()
  }

  public async deleteProduct(req: Request, res: Response) {
    const { deletedCount, ok } = await Service.delete(req.params.id)
    return res.status((deletedCount === 1 && ok === 1) ? NO_CONTENT:BAD_REQUEST).end()
  }
}

export default new ProductContoller()