const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Admin schema
const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
