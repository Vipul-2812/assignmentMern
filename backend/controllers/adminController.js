const Admin = require('../DB/models/admin.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // Add bcrypt for password hashing

// Admin Registration
exports.register = async (req, res) => {
  // Validation result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    // Check if the admin already exists
    let admin = await Admin.findOne({ username });
    if (admin) {
      return res.status(400).json({ msg: 'Admin already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin
    admin = new Admin({
      username,
      password: hashedPassword,
    });

    // Save the admin to the database
    await admin.save();
    res.status(201).json({ msg: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

// Admin Login
exports.login = async (req, res) => {
  // Validation result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    // Check if the admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Successful login
    res.status(200).json({ msg: 'Login successful' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

