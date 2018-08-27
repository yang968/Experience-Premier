const Validator = require('validator');
const isValid = require('./is-valid');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isValid(data.email) ? data.email : '';
  data.password = !isValid(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return { errors, isValid: isValid(errors) };
};