import eventsData from "../../data/events.json" assert { type: "json" };
// This function retrieves events data from a JSON file and returns it.

const getEvents = () => {
  return eventsData.events;
};

export default getEvents;
