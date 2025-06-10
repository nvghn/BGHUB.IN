const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Step 1: Redirect to Google
router.get("/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Google callback
router.get("/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        const token = jwt.sign(
            { id: req.user._id, email: req.user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.redirect(`/success?token=${token}`);
    }
);

// Optional success response
router.get("/success", (req, res) => {
    res.send("Login Success! Token sent.");
});

module.exports = router;