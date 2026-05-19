# SecureCloud Pay API Documentation

## Base URL
```
https://api.securecloud-pay.com/v1/
```

## Authentication
All API requests require JWT tokens in the Authorization header.

## Endpoints

### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout

### Payments
- GET /api/payments
- POST /api/payments
- GET /api/payments/{id}

### Transactions
- GET /api/transactions
- GET /api/transactions/{id}
- GET /api/transactions/analytics/summary

### Settlements
- GET /api/settlements
- POST /api/settlements
- GET /api/settlements/{id}

## Support
For API support, contact: kiran.kolamadya@gmail.com
