import Express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { NOT_FOUND } from 'http-status-codes'
import { ENV } from './config'
import Log from './bootstrap/log'

const initializeApp = async () => {
  const app = Express()

  app.use(cors())
  app.use(morgan('dev'))

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
