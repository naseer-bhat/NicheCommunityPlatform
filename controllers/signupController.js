import { User } from "../models/authmodel.js"
import argon2 from "argon2"
export const  signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await argon2.hash(password);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: "User registration failed", details: error.message });
  }
}