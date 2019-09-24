import { Request, Response } from 'express'
import Service from '../../services/ReceiptService'
import { CREATED, NO_CONTENT, BAD_REQUEST } from 'http-status-codes'
import { dateToQuery } from '../../utils/query';

class PurchaseContoller {
  public createReciept = async (req: Request, res: Response) => {
    const data = await Service.create(req.body)
    return res.status(CREATED).json(data)
  }

  public getPurchase = async (req: Request, res: Response) => {
    const format = {
      $push: {
        "items": "$items",
        "quantity": {
          "$sum": "$quantity"
        },
      }
    }
    const aggregate = Object.keys(req.query).length > 0 ? this.prepareQuery(req.query, format) : null
    const data = req.params.id ? await Service.findById(req.params.id, { ref: 'items' }) : await Service.find('agg', { ref: 'items', aggregate, })
    return res.status(CREATED).json(data)
  }

  public prepareQuery = (data: any, format: any): any => {
    const query: any = [
      {
        $lookup: {
          from: 'products',
          localField: 'items',
          foreignField: '_id',
          as: 'items'
        }
      },
      dateToQuery(data.range, format),
    ]
    return query
  }

  public convertToSchema = (data: any): any => {
    data.quantity = data.items.map((item: any) => item['quantity'])
    data.items = data.items.map((item: any) => item['productId'])
    return data
  }

  public deletePurchase = async (req: Request, res: Response) => {
    const { deletedCount, ok } = await Service.delete(req.params.id)
    return res.status((deletedCount === 1 && ok === 1) ? NO_CONTENT : BAD_REQUEST).end()
  }
}

export default new PurchaseContoller()