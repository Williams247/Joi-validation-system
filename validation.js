const Joi = require("joi");

function validateSchema(data) {
  const schema = Joi.object({
    username: Joi.string().required().min(3).max(30),
    title: Joi.string().required(),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    // With customed error message
    birth_year: Joi.number().integer().min(1999).max(2013),
    remarks: Joi.string().required().valid("Greate Job"),
    role: Joi.boolean().required().valid(false),
    passCodeOne: Joi.string().required(),
    passCodeTwo: Joi.string().required().valid(Joi.ref('passCodeOne')).error(new Error('PassCodeOne does not match PassCodeTwo'))
  })
  
  return schema.validate(data)
}

module.exports = validateSchema;
