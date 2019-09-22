import Express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { NOT_FOUND } from 'http-status-codes'
import { ENV, DB } from './config'
import Log from './bootstrap/log'
import API from './api'

const initializeApp = async () => {
  
  const app = Express()
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(morgan('dev'))

  API(app)
  app.use((req: Request, res: Response): Response => res.status(NOT_FOUND).send({ message: 'Route not found' }))
  app.listen(ENV.PORT, err => {
    if (err) {
      Log.error(err)
      process.exit(1)
      return
    }
    Log.info(`Server running ${ENV.APP_URL}:${ENV.PORT}`)
  })
}

initializeApp()
