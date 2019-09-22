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

  public async create(data: IProduct, conditions = {}) {
    return await this.model.create(data)
  }
}
