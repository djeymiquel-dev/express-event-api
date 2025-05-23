import express from "express";
import getEvents from "../services/events/getEvents.js";
import getEventById from "../services/events/getEventById.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";
import createEvent from "../services/events/createEvent.js";
import updateEvent from "../services/events/updateEvent.js";
import deleteEvent from "../services/events/deleteEvent.js";
import toIso from "../utils/toIso.js";

// create a new router instance
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const events = getEvents();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get(
  "/:id",
  (req, res) => {
    const event = getEventById(req.params.id);
    res.status(200).json(event);
  },
  notFoundErrorHandler
);

router.post("/", authMiddleware, (req, res) => {
  const {
    title,
    description,
    image,
    categoryIds,
    location,
    startTime,
    endTime,
  } = req.body;
  const createdBy = req.user.id;
  const newEvent = createEvent(
    createdBy,
    title,
    description,
    image,
    categoryIds,
    location,
    toIso(startTime),
    toIso(endTime)
  );
  res.status(201).json(newEvent);
});

router.put(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const {
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime,
    } = req.body;

    const updatedEvent = updateEvent(
      id,
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime
    );
    res
      .status(200)
      .json({ message: `Event with id ${id} was successfully updated` });
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const deletedEvent = deleteEvent(id);
    console.log(deletedEvent);

    res.status(200).json({
      message: `Event with id ${deletedEvent} is successfully deleted ! `,
    });
  },
  notFoundErrorHandler
);

export default router;
