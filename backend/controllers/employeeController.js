const Employee = require('../DB/models/employee.model');
const { validationResult } = require('express-validator');

// Create Employee
exports.createEmployee = async (req, res) => {
  // Validation result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, contactNumber, position, department, salary } = req.body;

  try {
    // Create a new employee
    const employee = new Employee({
      name,
      email,
      contactNumber,
      position,
      department,
      salary
    });

    // Save the employee to the database
    await employee.save();
    res.status(201).json({ msg: 'Employee created successfully', employee });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

// Get All Employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

// Update Employee
// Update Employee
exports.updateEmployee = async (req, res) => {
  const { id } = req.params; // Get the employee ID from the request parameters
  const { name, email, contactNumber, position, department, salary } = req.body;

  // Validation result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Find and update the employee by ID
    const employee = await Employee.findByIdAndUpdate(
      id,
      {
        name,
        email,
        contactNumber,
        position,
        department,
        salary,
      },
      { new: true } // Return the updated employee after modification
    );

    // Check if employee exists
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.status(200).json({ msg: 'Employee updated successfully', employee });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};


// Delete Employee
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.status(200).json({ msg: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

