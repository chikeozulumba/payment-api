import CrudService from './CrudService'
import Receipt from '../models/reciept'

class ReceiptService extends CrudService{
  public connection: any 
  public model = Receipt
  constructor() {
    super()
  }
}

export default new ReceiptService()