import eventData from "../../data/events.json" assert { type: "json" };
import toIso from "../../utils/toIso.js";
import { v4 as uuid } from "uuid";
import getOrCreateCategoryIds from "../../utils/getOrCreateCategoryIds.js";

const createEvent = (
  createdBy,
  title,
  description,
  image,
  categoryNames,
  location,
  startTime,
  endTime
) => {
  const events = eventData.events;
  const categoryIds = getOrCreateCategoryIds(categoryNames);

  const newEvent = {
    id: uuid(),
    // createdBy id word opgehaald uit de request body wanneer een user is ingelogd (zie login.js in routes)
    createdBy,
    title,
    description,
    image,
    categoryIds,
    location,
    startTime,
    endTime,
  };
  events.push(newEvent);
  return newEvent;
};

export default createEvent;
