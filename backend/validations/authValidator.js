const { body } = require("express-validator");

const registerValidation = [
  body("email")
    .isEmail("Please enter a valid email")
    .notEmpty("Please enter an email")
    .isString("Please enter a valid email")
    .trim(),

  body("password")
    .isLength({ min: 8, max: 20 })
    .notEmpty("Please enter a password")
    .trim(),

  body("firstName")
    .notEmpty("Please enter a first name")
    .isString("Please enter a valid first name")
    .trim()
    .toLowerCase(),

  body("lastName")
    .notEmpty("Please enter a last name")
    .isString("Please enter a valid last name")
    .trim()
    .toLowerCase(),

  body("role")
    .notEmpty("Please enter a role")
    .isString("Please enter a valid role")
    .trim()
    .toLowerCase(),

  body("phoneNumber")
    .isLength({ min: 11, max: 11 })
    .notEmpty("Please enter a phone number")
    .trim()
    .isString("Please enter a valid phone number"),
];

const loginValidation = [
  body("email")
    .isEmail("Please enter a valid email")
    .notEmpty("Please enter an email")
    .isString("Please enter a valid email")
    .trim(),

  body("password")
    .isLength({ min: 8, max: 20 })
    .notEmpty("Please enter a password")
    .trim(),
];

module.exports = { registerValidation, loginValidation };
