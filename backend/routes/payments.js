const express = require('express');
const router = express.Router();

// Get all payments
router.get('/', (req, res) => {
  res.json({
    success: true,
    payments: [
      {
        id: 'PAY001',
        amount: 500,
        currency: 'USD',
        status: 'completed',
        created_at: '2026-05-19T10:30:00Z'
      },
      {
        id: 'PAY002',
        amount: 1250.50,
        currency: 'USD',
        status: 'completed',
        created_at: '2026-05-19T09:15:00Z'
      }
    ]
  });
});

// Create payment
router.post('/', (req, res) => {
  const { amount, currency, recipient, description } = req.body;

  if (!amount || !currency || !recipient) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  res.status(201).json({
    success: true,
    message: 'Payment created successfully',
    payment: {
      id: 'PAY' + Date.now(),
      amount: amount,
      currency: currency,
      recipient: recipient,
      description: description,
      status: 'pending',
      created_at: new Date().toISOString()
    }
  });
});

// Get payment by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    success: true,
    payment: {
      id: id,
      amount: 500,
      currency: 'USD',
      status: 'completed',
      created_at: '2026-05-19T10:30:00Z'
    }
  });
});

module.exports = router;
