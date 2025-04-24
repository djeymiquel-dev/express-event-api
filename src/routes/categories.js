import express from "express";
import getCategories from "../services/categories/getCategories.js";
import getCategoryById from "../services/categories/getCategoryById.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";
import createCategory from "../services/categories/createCategory.js";
import UnauthorizedErrorHandler from "../middleware/unauthorizedErrorHandler.js";
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const categories = getCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const category = getCategoryById(id);

    res.status(200).json(category);
  },
  notFoundErrorHandler
);

router.post(
  "/",
  (req, res) => {
    const category = createCategory();
  },
  UnauthorizedErrorHandler
);

export default router;
