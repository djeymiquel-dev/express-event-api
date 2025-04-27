import express from "express";
import getCategories from "../services/categories/getCategories.js";
import getCategoryById from "../services/categories/getCategoryById.js";
import createCategory from "../services/categories/createCategory.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import updateCategoryById from "../services/categories/updateCategoryById.js";
import deleteCategory from "../services/categories/deleteCategory.js";
import authMiddleware from "../middleware/auth.js";
// import createCategory from "../services/categories/createCategory.js";
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
    const { name } = req.body;
    const category = createCategory(name);

    res.status(201).json(category);
  },
  notFoundErrorHandler
);

router.put(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = updateCategoryById(id, { name });

    if (updatedCategory) {
      res.status(200).send({
        message: `Category with id ${id} successfully updated`,
        updatedCategory,
      });
    }
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const deletedCategoryId = deleteCategory(id);

    res.status(200).json({
      message: `Category with id ${deletedCategoryId} was deleted!`,
    });
  },
  notFoundErrorHandler
);

export default router;
