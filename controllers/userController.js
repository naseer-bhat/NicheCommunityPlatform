import {User} from "../models/userMode.js"
export const getUserById = async (req, res) => {
  try {
    const userId = req.query.id; 
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId); 

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid User ID or Server Error" });
  }
};

export const addUser= async (req, res) => {
  try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}