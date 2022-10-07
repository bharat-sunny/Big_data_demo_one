import Joi from 'joi';

import JoiObject from 'joi-objectid';

export const userSchema = Joi.object().keys({ 
    firstName: Joi.string().required(), 
    lastName: Joi.string().required(),
    email: Joi.string().email()
});


export const userDeleteSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)

export const userSearchSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const userUpdateSchema = Joi.object().keys({
    firstName: Joi.string().required(), 
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    id : Joi.string().regex(/^[0-9a-fA-F]{24}$/)
})