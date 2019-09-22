import ShortID from 'shortid'
import { Document, Schema, model, Types } from "mongoose";

export interface IProduct extends Document {
  title: string
  description: string
  quantity: number
  price: string
  discount: string
}

const productSchema: Schema = new Schema({
  title: {
    type: String,
    required: false,
    unique: true,
  },
  sku: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0.0,
  },
  discount: {
    type: Number,
    default: 0.0,
  },
  currency: {
    type: String,
    default: 'Dollar',
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

productSchema.pre('save', function (next) {
  const doc: any = this
  doc.sku = ShortID.generate()
  next()
});

export default model<IProduct>('Product', productSchema);