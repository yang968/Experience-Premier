const Validator = require('validator');
const isValid = require('./is-valid');

module.exports = function validateTaskInput(data) {
  let errors = {};
  
  data.transcript = !isValid(data.transcript) ? data.transcript : "";

  if (!Validator.isLength(data.transcript, { min: 1})) {
    errors.transcript = "Transcript can't be empty!"
  }

  return {
    errors,
    isValid: isValid(errors)
  }
}