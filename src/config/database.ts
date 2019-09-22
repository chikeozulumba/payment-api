import { Db } from 'mongodb'
import mongoose from 'mongoose'
import env from './env'

const { DATABASE_URL = '' } = env

export default async (): Promise<Db> => {
  const { connection: { db: DB }} = await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  return DB
}
