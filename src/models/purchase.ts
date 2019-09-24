import ShortID from 'shortid'
import { Document, Schema, model, Types } from "mongoose"

export interface IPurchase extends Document {
  items: any
}

const purchaseSchema: Schema = new Schema({
  referenceID: {
    type: String,
  },
  items: [
    {
      type: Types.ObjectId,
      ref: 'Product',
    },
  ],
  quantity: [
    {
      type: Number,
      default: 0,
    },
  ],
  reciept: {
    type: Types.ObjectId,
    ref: 'Reciept',
    unique: true
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

purchaseSchema.pre('save', function (next) {
  const doc: any = this
  doc.referenceID = ShortID.generate()
  next()
})

export default model<IPurchase>('Purchase', purchaseSchema, 'purchases')
