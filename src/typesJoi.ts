import Joi from 'joi';

const addressSchema = Joi.object({
    street: Joi.string(),
    city: Joi.string()
});


export const userSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    address: addressSchema,
});

export const renderUserInfoSchema = Joi.object({
    userList: Joi.array().items(userSchema)
});