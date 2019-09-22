import { Router } from 'express'
import products from './routes/products'
import purchases from './routes/purchases'

// guaranteed to get dependencies
export default (app: Router) => {
	products(app)
	purchases(app)
	return app
}