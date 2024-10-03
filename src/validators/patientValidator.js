const { body, validationResult } = require('express-validator');

exports.validatePatient = [
  body('fullName')
    .optional()
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Full name must be a non-empty string'),
  body('gender')
    .optional()
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be Male or Female'),
  body('birthdate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('Valid birthdate is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validatePatientPost = [
  body('fullName')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Full name must be a non-empty string'),
  body('gender')
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be Male or Female'),
  body('birthdate')
    .isISO8601()
    .toDate()
    .withMessage('Valid birthdate is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];