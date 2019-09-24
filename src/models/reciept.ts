import ShortID from 'shortid'
import { Document, Schema, model, Types } from "mongoose"

export interface IReciept extends Document {
  title: string
  description: string
  quantity: number
  price: string
  discount: string
}

const receiptSchema: Schema = new Schema({
  referenceID: {
    type: String,
    default: ShortID.generate()
  },
  status: {
    type: String,
    enum: ['unpaid', 'paid'],
    required: true
  },
  dateCleared: {
    type: Date,
    required: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

receiptSchema.pre('save', function (next) {
  const doc: any = this
  doc.referenceID = ShortID.generate()
  next()
});

export default model<IReciept>('Reciept', receiptSchema, 'reciepts');