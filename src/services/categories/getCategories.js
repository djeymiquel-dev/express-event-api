import categoryData from "../../data/categories.json" assert { type: "json" }; //  zorg ervoor dat je de juiste extensie gebruikt!!

const getCategories = () => {
  return categoryData.categories;
};

export default getCategories;
