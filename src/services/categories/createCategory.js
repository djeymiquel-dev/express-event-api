import categoryData from "../../data/categories.json " assert { type: "json" };
import UnauthorizedError from "../../errors/UnauthorizedError.js";

const createCategory = () => {
  throw new UnauthorizedError();
};

export default createCategory;
