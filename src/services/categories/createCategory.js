import categoryData from "../../data/categories.json " assert { type: "json" };
import { v4 as uuid } from "uuid";
import UnauthorizedError from "../../errors/UnauthorizedError.js";

const createCategory = (name) => {
  const category = categoryData.categories.find((cat) => cat.name === name);
  console.log(category);
  if (category) {
    throw new Error(`${name} already exist!`);
  }
  const newCategory = {
    name,
    id: uuid().toString(),
  };
  categoryData.categories.push(newCategory);
  return newCategory;
};

export default createCategory;
