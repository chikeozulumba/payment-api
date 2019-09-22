import Joi from '@hapi/joi'

export const addProduct = {
  title: Joi.string().required(),
  quantity: Joi.number().required().min(1),
  description: Joi.string().optional(),
  price: Joi.number().required(),
  discount: Joi.number().optional(),
}
