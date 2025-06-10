const User = require('../models/User');

// @desc    Get all users (Admin only)
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
    try {
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied, Admins only" });
        }

        const users = await User.find({}).select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getAllUsers };