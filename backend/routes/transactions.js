const express = require('express');
const router = express.Router();

// Get all transactions
router.get('/', (req, res) => {
  res.json({
    success: true,
    total: 1234,
    transactions: [
      {
        id: 'TXN001234',
        amount: 500,
        currency: 'USD',
        status: 'completed',
        payment_method: 'credit_card',
        created_at: '2026-05-19T10:30:00Z'
      },
      {
        id: 'TXN001233',
        amount: 1250.50,
        currency: 'USD',
        status: 'completed',
        payment_method: 'bank_transfer',
        created_at: '2026-05-19T09:15:00Z'
      },
      {
        id: 'TXN001232',
        amount: 750,
        currency: 'USD',
        status: 'pending',
        payment_method: 'digital_wallet',
        created_at: '2026-05-18T14:22:00Z'
      }
    ]
  });
});

// Get transaction by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    success: true,
    transaction: {
      id: id,
      amount: 500,
      currency: 'USD',
      status: 'completed',
      payment_method: 'credit_card',
      created_at: '2026-05-19T10:30:00Z'
    }
  });
});

// Get transaction analytics
router.get('/analytics/summary', (req, res) => {
  res.json({
    success: true,
    summary: {
      total_transactions: 1234,
      total_volume: 245678,
      success_rate: 99.8,
      average_transaction: 199.25
    }
  });
});

module.exports = router;
