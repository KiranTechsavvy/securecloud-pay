const express = require('express');
const router = express.Router();

// Get all settlements
router.get('/', (req, res) => {
  res.json({
    success: true,
    settlements: [
      {
        id: 'SET001',
        amount: 10500,
        status: 'settled',
        bank_account: '****1234',
        created_at: '2026-05-15T10:30:00Z'
      },
      {
        id: 'SET002',
        amount: 8750.50,
        status: 'settled',
        bank_account: '****5678',
        created_at: '2026-05-08T09:15:00Z'
      }
    ]
  });
});

// Create settlement
router.post('/', (req, res) => {
  const { amount, bank_account } = req.body;

  if (!amount || !bank_account) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  res.status(201).json({
    success: true,
    message: 'Settlement initiated',
    settlement: {
      id: 'SET' + Date.now(),
      amount: amount,
      status: 'processing',
      bank_account: bank_account,
      created_at: new Date().toISOString()
    }
  });
});

// Get settlement by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    success: true,
    settlement: {
      id: id,
      amount: 10500,
      status: 'settled',
      bank_account: '****1234',
      created_at: '2026-05-15T10:30:00Z'
    }
  });
});

module.exports = router;
