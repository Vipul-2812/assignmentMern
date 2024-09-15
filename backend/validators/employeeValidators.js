
const { body } = require('express-validator');

exports.createEmployeeValidator = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),

  body('email')
    .isEmail()
    .withMessage('Valid email is required'),

  body('contactNumber')
    .notEmpty()
    .withMessage('Contact number is required')
    .isLength({ min: 10, max: 10 })
    .withMessage('Contact number must be 10 digits'),

  body('position')
    .notEmpty()
    .withMessage('Position is required')
    .isLength({ min: 2 })
    .withMessage('Position must be at least 2 characters long'),

  body('department')
    .notEmpty()
    .withMessage('Department is required')
    .isLength({ min: 2 })
    .withMessage('Department must be at least 2 characters long'),

  body('salary')
    .notEmpty()
    .withMessage('Salary is required')
    .isNumeric()
    .withMessage('Salary must be a number')
];


exports.updateEmployeeValidator = [
  body('name').optional().not().isEmpty().withMessage('Name is required'),
  body('email').optional().isEmail().withMessage('Valid email is required'),
  body('contactNumber').optional().not().isEmpty().withMessage('Contact number is required'),
  body('position').optional().not().isEmpty().withMessage('Position is required'),
  body('department').optional().not().isEmpty().withMessage('Department is required'),
  body('salary').optional().isNumeric().withMessage('Salary must be a number')
];





