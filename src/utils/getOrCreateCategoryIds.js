import categoryData from "../data/categories.json" assert { type: "json" };
import createCategory from "../services/categories/createCategory.js";

const getOrCreateCategoryIds = (categoryNamesString) => {
  const categoryNames = categoryNamesString
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name.length > 0); // voorkom lege items

  const categoryIds = [];

  for (const name of categoryNames) {
    const existingCategory = categoryData.categories.find(
      (cat) => cat.name.toLowerCase() === name.toLowerCase()
    );

    if (existingCategory) {
      categoryIds.push(existingCategory.id);
      console.log("✅ Bestaat:", existingCategory.name);
    } else {
      const newCategory = createCategory(name);
      categoryIds.push(newCategory.id);
      console.log("➕ Nieuw:", newCategory.name);
    }
  }

  return categoryIds;
};

export default getOrCreateCategoryIds;
