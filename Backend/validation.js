const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    mobile: Joi.number().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = { registerValidation };
