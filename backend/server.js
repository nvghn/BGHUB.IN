const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes.js");
const adminRoutes = require("./routes/adminRoutes");
const authGoogle = require("./routes/authGoogle.js"); // Google Auth Route

dotenv.config();
require("./config/passport.js");

const app = express();

// --- Middleware (BEFORE routes) ---
app.use(express.json());
app.use(cors());

// --- Session and Passport Setup ---
app.use(session({
  secret: "keyboardcat",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// --- DB Connection ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// --- Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/auth", authGoogle); // Google Auth Route

app.get("/", (req, res) => {
  res.send("✅ API is notforU running...");
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));