import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import argon2 from "argon2"; // Use Argon2 for password verification
import { User } from "../models/userMode.js"; // Ensure this path is correct

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "defaultSecretKey";

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify password using Argon2
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" });

    // Send success response
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: "Login failed", details: error.message });
  }
};
