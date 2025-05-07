const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

// ✅ Protect + Admin check
router.get('/users', protect, admin, getAllUsers);

module.exports = router;