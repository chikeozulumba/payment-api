import Joi from '@hapi/joi'

export const addProduct = {
  title: Joi.string().required(),
  quantity: Joi.number().required().min(1),
  description: Joi.string().optional(),
  price: Joi.number().required(),
  discount: Joi.number().optional(),
}

export const addPurchase = {
  items: Joi.array().items(Joi.object().keys({
    productId: Joi.string().required(),
    quantity: Joi.number().required().min(1),
  })),
}

export const updateProduct = {
  title: Joi.string().optional(),
  quantity: Joi.number().optional().min(1),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  discount: Joi.number().optional(),
}

export const findProduct = {
  id: Joi.string().optional(),
}

export const findPurchase = {
  id: Joi.string().optional(),
}
