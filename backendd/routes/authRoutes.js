const express = require("express");
const passport = require("passport");
const { protect } = require("../middleware/authMiddleware");
const { registerUser, loginUser, getUserProfile } = require("../controllers/authController");

const router = express.Router();

// Google Auth Routes
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/dashboard",
            failureRedirect: "/login",
              })
              );

              // Normal Auth Routes
              router.post("/register", registerUser);
              router.post("/login", loginUser);
              router.get("/profile", protect, getUserProfile);

              module.exports = router;