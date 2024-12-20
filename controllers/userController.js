import {User} from "../models/userMode.js"

export const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id); 
  const user = User.find(u => u.id === userId);

  if (user) {
      res.json(user);
  } else {
      res.status(404).json({ message: "User not found" });
  }
}
export const addUser= async (req, res) => {
  try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}