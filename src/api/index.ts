import { Router } from 'express'
import products from './routes/products'

// guaranteed to get dependencies
export default (app: Router) => {
	products(app)
	return app
}