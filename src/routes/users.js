import express from "express";
import getUsers from "../services/users/getUsers.js";
import getUserById from "../services/users/getUserById.js";
import updateUser from "../services/users/updateUser.js";
import createNewUser from "../services/users/createNewUser.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import deleteUser from "../services/users/deleteUser.js";

const router = express.Router();

// Get All User
router.get(
  "/",
  (req, res) => {
    const users = getUsers();
    res.status(200).json(users);
  },
  notFoundErrorHandler
);

// Get User by ID
router.get(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const user = getUserById(id);
    res.status(200).json(user);
  },
  notFoundErrorHandler
);

// Create New User
router.post("/", (req, res) => {
  const { username, password, name, image } = req.body;
  const newUser = createNewUser(username, password, name, image);
  res.status(201).json(newUser);
});

// Update User
router.put(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const { username, password, name, image } = req.body;
    const updatedUser = updateUser(id, { username, password, name, image });
    if (updatedUser) {
      res.status(200).json({
        message: `User with ID ${id} successfully updated`,
        updateUser,
      });
    }
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const deletedUser = deleteUser(id);
    res.status(200).json({
      message: `User with id ${deletedUser} was deleted`,
    });
  },
  notFoundErrorHandler
);

export default router;
