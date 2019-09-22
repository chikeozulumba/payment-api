import { celebrate, Joi } from 'celebrate'

export const addProduct = celebrate({
  body: Joi.object({
    productName: Joi.string().required(),
    quantity: Joi.string().required(),
  })
})