const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Employee schema
const employeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
}, { timestamps: true });

// Create Employee model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
