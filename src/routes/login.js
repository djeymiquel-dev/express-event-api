import express from "express";
import userData from "../data/users.json" assert { type: "json" };
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth.js";
import UnauthorizedError from "../errors/UnauthorizedError.js";

const router = express.Router();

router.post("/", (req, res) => {
  const secretKey = "my-secret-key";
  const { username, password } = req.body;
  const { users } = userData;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    throw new UnauthorizedError();
  }

  const token = jwt.sign({ userId: user.id }, secretKey);
  res.status(200).json({ message: "Successfully logged in!", token });
});

export default router;
