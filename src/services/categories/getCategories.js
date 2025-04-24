import categoryData from "../../data/categories.json" assert { type: "json" }; //  zorg ervoor dat je de juiste extensie gebruikt!!
import eventData from "../../data/events.json" assert { type: "json" };

const getCategories = () => {
  // const createdBy = eventData.events.find((event) => event.createdBy);
  // return categoryData.categories.find((cat) => cat.id === createdBy);
  return categoryData.categories;
};

export default getCategories;
