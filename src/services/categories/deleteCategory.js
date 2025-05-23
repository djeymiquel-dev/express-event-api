import categoryData from "../../data/categories.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const deleteCategory = (id) => {
  const index = categoryData.categories.findIndex((cat) => cat.id === id);

  if (index === -1) {
    throw new NotFoundError("Category", id);
  }
  categoryData.categories.splice(index, 1);
  return id;
};

export default deleteCategory;
