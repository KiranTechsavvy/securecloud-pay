const express = require('express');
const router = express.Router();

// Login endpoint
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  // Mock authentication
  if (email === 'kiran.kolamadya@gmail.com') {
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'mock_jwt_token_' + Date.now(),
      user: {
        id: 1,
        email: email,
        name: 'Kiran Kolamadya',
        company: 'SecureCloud Pay'
      }
    });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});

// Register endpoint
router.post('/register', (req, res) => {
  const { email, password, companyName } = req.body;

  if (!email || !password || !companyName) {
    return res.status(400).json({ error: 'All fields required' });
  }

  res.status(201).json({
    success: true,
    message: 'Registration successful',
    user: {
      email: email,
      companyName: companyName
    }
  });
});

// Logout endpoint
router.post('/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Logout successful'
  });
});

module.exports = router;
