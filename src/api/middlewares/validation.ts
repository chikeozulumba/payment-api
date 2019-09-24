import Joi from '@hapi/joi'
import { Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';

const handleMultipleValidationErrors = (res: Response, { details }: Joi.ValidationError, errorCode = 400) => res.status(errorCode)
  .json({ error: details.map((i: { message: any; }) => i.message).join('\n ') });

export const requestParamsValidation = (paramSchema: Joi.SchemaLike = {}, bodySchema: Joi.SchemaLike = {}) => (req: Request, res: Response, next: NextFunction) => {
  if (Object.keys(req.params).length > 0) {
    const { error } = Joi.validate(req.params, paramSchema);
    if (error) return handleMultipleValidationErrors(res, error, 400);
  }
  
  if (Object.keys(req.body).length > 0) {
    const { error } = Joi.validate(req.body, bodySchema);
    if (error) return handleMultipleValidationErrors(res, error, 400);
  }

  if (req.params.id) {
    const objectID = require('mongodb').ObjectID
    if (!objectID.isValid(req.params.id)) {

      return res.status(BAD_REQUEST).json({
        message: 'Request parameter is invalid'
      });
    }
  }

  return next();
};