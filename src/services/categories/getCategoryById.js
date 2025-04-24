import categoryData from "../../data/categories.json" assert { type: "json" }; //  zorg ervoor dat je de juiste extensie gebruikt!!
import NotFoundError from "../../errors/NotFoundError.js";

const getCategoryById = (id) => {
  const category = categoryData.categories.find((cat) => cat.id === id);

  if (!category) {
    throw new NotFoundError("Category", id);
  }

  return category;
};

export default getCategoryById;
