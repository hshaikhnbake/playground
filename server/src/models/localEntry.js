const Joi = require('joi');

module.exports = {

  logs: [
    { id: 0, title: 'hello' },
    { id: 1, title: 'hello1' },
    { id: 2, title: 'hello2' },
    { id: 3, title: 'hello3' },
  ],

  validateSchema: (log) => {
    const schema = Joi.object({
      startLatitude: Joi.number().min(-90).max(90)
        .required(),
      startLongitude: Joi.number().min(-180).max(180)
        .required(),
      endLatitude: Joi.number().min(-90).max(90)
        .required(),
      endLongitude: Joi.number().min(-180).max(180)
        .required(),
      freightDescription: Joi.string().required(),

    });
    return schema.validate(log);
  },

};
