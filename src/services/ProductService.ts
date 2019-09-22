import CrudService from './CrudService'
import Product, { IProduct } from '../models/product'

class ProductService extends CrudService{
  public connection: any 
  public model = Product
  constructor() {
    super()
  }
}

export default new ProductService()