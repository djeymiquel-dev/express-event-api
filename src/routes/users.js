import express from "express";
import getUsers from "../services/users/getUsers.js";
import getUserById from "../services/users/getUserById.js";
import createNewUser from "../services/users/createNewUser.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const users = getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    const user = getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(404).json({ message: error.message });
  }
});

router.post("/", (req, res) => {
  const { username, password, name, image } = req.body;
  const newUser = createNewUser(username, password, name, image);

  // Here you would typically save the user to a database
  // For this example, we'll just return a success message
  res.status(201).json(newUser);
});

export default router;
