import { User } from "../models/userMode.js";
import argon2 from "argon2";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: "User registration failed", details: error.message });
  }
};
