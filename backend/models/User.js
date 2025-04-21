const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
            googleId: {
                        type: String,
                                    required: false,
                                            },
                                                    name: {
                                                                type: String,
                                                                            required: true,
                                                                                    },
                                                                                            email: {
                                                                                                        type: String,
                                                                                                                    required: true,
                                                                                                                                unique: true,
                                                                                                                                        },
                                                                                                                                                password: {
                                                                                                                                                            type: String, // Only required for normal login
                                                                                                                                                                    },
                                                                                                                                                                            isAdmin: {
                                                                                                                                                                                        type: Boolean,
                                                                                                                                                                                                    default: false,
                                                                                                                                                                                                            },
                                                                                                                                                                                                                },
                                                                                                                                                                                                                    { timestamps: true }
                                                                                                                                                                                                                    );

                                                                                                                                                                                                                    module.exports = mongoose.model("User", userSchema);