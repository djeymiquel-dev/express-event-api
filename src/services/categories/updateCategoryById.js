import categoriesData from "../../data/categories.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

// const updateCategoryById = (id, name) => {
//   const categories = categoryData.categories;
//   console.log(typeof id);
//   console.log(name);
//   console.log(categories.find((cat) => cat.id));

const updateCategoryById = (id, updatedCategory) => {
  const categoryIndex = categoriesData.categories.findIndex(
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

  return categoriesData.categories[categoryIndex];
};

export default updateCategoryById;
