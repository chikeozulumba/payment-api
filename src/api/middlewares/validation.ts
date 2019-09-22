import Joi from '@hapi/joi'
import { Request, Response, NextFunction } from 'express';

const handleMultipleValidationErrors = (res: Response, { details }: Joi.ValidationError, errorCode = 400) => res.status(errorCode)
  .json({ error: details.map((i: { message: any; }) => i.message).join('\n ') });

export const requestParamsValidation = (paramSchema: Joi.SchemaLike = {}, bodySchema: Joi.SchemaLike = {}) => (req: Request, res: Response, next: NextFunction) => {
  if (Object.keys(req.params).length > 0) {
    const { error } = Joi.validate(req.body, paramSchema);
    if (error) return handleMultipleValidationErrors(res, error, 400);
  }
  
  if (Object.keys(req.body).length > 0) {
    const { error } = Joi.validate(req.body, bodySchema);
    if (error) return handleMultipleValidationErrors(res, error, 400);
  }

  return next();
};
