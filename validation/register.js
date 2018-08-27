const Validator = require('validator');
const isValid = require('./is-valid');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = !isValid(data.firstName) ? data.firstName : '';
  data.lastName = !isValid(data.lastName) ? data.lastName : '';
  data.email = !isValid(data.email) ? data.email : '';
  data.company = !isValid(data.company) ? data.company :'';
  data.password = !isValid(data.password) ? data.password : '';
  data.password2 = !isValid(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = 'First Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name field is required';
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = 'Last Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return { errors, isValid: isValid(errors)
  };
};