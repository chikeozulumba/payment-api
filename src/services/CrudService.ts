import { DB } from '../config'
import { IProduct } from '../models/product';

// console.log(await DB())

export default class CrudService {
  public connection: any
  public model: any

  constructor() {
    this.init()
  }

  public async init(): Promise<void> {
    this.connection = await DB()
  }

  public async create(data: IProduct) {
    return await this.model.create(data)
  }

  public async findById(id: string, conditions: any = {}) {
    return await this.model.findById(id).populate(conditions.ref)
  }

  public async aggregate(conditions: any = {}) {
    return await this.model.aggregate([
      ...conditions,
    ])
  }

  public async find(type: string = 'normal', conditions: any = {}) {
    if (type === 'agg') return await this.aggregate(conditions.aggregate || {})
    return await this.model.find().sort({ updatedAt: -1 }).populate(conditions.ref)
  }

  public async update(params: any, payload: any, conditions: any = {}) {
    return await this.model.updateOne(params, payload, conditions)
  }

  public async delete(id: string) {
    return await this.model.deleteOne({ _id: id })
  }
}
