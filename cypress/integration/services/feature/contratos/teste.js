/// <reference types="cypress" />

import Joi from 'joi'

const teste = Joi.object({
    algo: Joi.bool().allow(null).required(),
    algo2: Joi.bool().required(),
    algo3: Joi.string().required(),
    algo4: Joi.array().required(),
    algo5: Joi.bool().allow("").required(),
    algo6: teste: Joi.object({
        teste1: Joi.bool().required(),
        teste2: Joi.array().required(),
        teste3: Joi.bool().required()
    }),
}),    

export default teste