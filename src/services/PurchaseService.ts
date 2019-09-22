import CrudService from './CrudService'
import Purchase from '../models/purchase'

class PurchaseService extends CrudService{
  public connection: any 
  public model = Purchase
  constructor() {
    super()
  }
}

export default new PurchaseService()