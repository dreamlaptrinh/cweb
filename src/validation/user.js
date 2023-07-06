import Joi from "joi";

export const signUpValid = Joi.object(
    {
    name: Joi.string().required().min(3).messages({
        "string.empty":"name is required",
        "any.required": "name is required",
        "string.min":"name must be at least 3 characters" 
    }),
    email: Joi.string().email().required().messages({
        "string.empty":"email is required",
        "any.required":"email is required",
        "string.email":"email is invalid" 
    }),
    password: Joi.string().required().messages({
        "string.empty": "password is required",
        "any.required": "password is required",
        "string.min": "password must be at least 6 characters",
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "any.required": "confirmpassword is required",
        "any.only": "confirmpassword is not matching",
        "string.empty": "confirmpassword is not empty",
    })
});

export const signInValid = Joi.object(
    {
    email: Joi.string().email().required().messages({
        "string.empty":"email is required",
        "any.required":"email is required",
        "string.email":"email is invalid" 
    }),
    password: Joi.string().required().messages({
        "string.empty": "password is required",
        "any.required": "password is required",
        "string.min": "password must be at least 6 characters",
    }),  
});