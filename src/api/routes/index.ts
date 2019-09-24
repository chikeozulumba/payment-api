import { Router } from 'express'
import products from './products'
import purchases from './purchases'

// guaranteed to get dependencies
export default (app: Router) => {
	products(app)
	purchases(app)
	return app
}