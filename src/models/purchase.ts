import { Document, Schema, model, Types } from "mongoose";

export interface IPurchase extends Document {
  title: string
  description: string
  quantity: number
  price: string
  discount: string
}

const purchaseSchema: Schema = new Schema({
  title: {
    type: String,
    required: false,
    unique: false,
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

export default model<IPurchase>('Purchase', purchaseSchema);