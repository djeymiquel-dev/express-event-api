import categoriesData from "../../data/categories.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const updateCategoryById = (id, name) => {
  /*   const categoryIndex = categoriesData.categories.findIndex(
    (category) => category.id === id
  );

  if (categoryIndex === -1) {
    return null;
  }

  const { name } = updatedCategory;

  categoriesData.categories[categoryIndex] = {
    ...categoriesData.categories[categoryIndex],
    name: name || categoriesData.categories[categoryIndex].name,
  };

  return categoriesData.categories[categoryIndex] */
  const category = categoriesData.categories.find((cat) => cat.id === id);

  if (!category) {
    throw new NotFoundError("Category", id);
  }

  category.name = name ?? category.name;
  return category;
};

export default updateCategoryById;
