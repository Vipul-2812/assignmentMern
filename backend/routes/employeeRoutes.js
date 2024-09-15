const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { createEmployeeValidator, updateEmployeeValidator } = require('../validators/employeeValidators');

// CRUD routes for employees
router.post('/', createEmployeeValidator, employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.put('/:id', updateEmployeeValidator, employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
