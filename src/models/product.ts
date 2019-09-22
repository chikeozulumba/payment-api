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
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
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

export default model<IProduct>('Product', productSchema);