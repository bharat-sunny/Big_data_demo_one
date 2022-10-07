import joi from 'joi';
import createHttpError from 'http-errors';
import * as schemas from '../validaiton-schemas/user.js';

export const validateUserSave = async (request, response, next) => {
    try {
        const validated = await schemas.userSchema.validateAsync(request.body);
        request.body = validated;
        next();
    } catch (error) {
        if(error.isJoi) {
            console.log("error : ", error)
            return next(createHttpError(422, {message: "Failed to validate request"}))
        }
        else {
            next(createHttpError(500));
        }
    }
}

export const validateUserDelete = async (request, response, next) => {
    try {
        const validated = await schemas.userDeleteSchema.validateAsync(request.params.id);
        console.log("validated : ", validated)
        next();
    } catch (error) {
        if(error.isJoi) {
            console.log("error : ", error)
            return next(createHttpError(422, {message: "Failed to validate request"}))
        }
        else {
            next(createHttpError(500));
        }
    }
}

export const validateUserSearch = async (request, response, next) => {
    try {
        const validated = await schemas.userSearchSchema.validateAsync(request.params.id);
        console.log("validated : ", validated)
        next();
    } catch (error) {
        if(error.isJoi) {
            console.log("error : ", error)
            return next(createHttpError(422, {message: "Failed to validate request"}))
        }
        else {
            next(createHttpError(500));
        }
        
    }
}

export const validateUserUpdate = async (request, response, next) => {
    try {

        const validateObj = {
            ...request.body, id : request.params.id
        }

        const validated = await schemas.userUpdateSchema.validateAsync(validateObj);
        request.body = validated;
        next();
    } catch (error) {
        if(error.isJoi) {
            console.log("error : ", error)
            return next(createHttpError(422, {message: "Failed to validate request"}))
        }
        else {
            next(createHttpError(500));
        }
    }
}