import express from "express";
import getEvents from "../services/events/getEvents.js";
import getEventById from "../services/events/getEventById.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";

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

// router.update("/:id", (req, res) => {
//   const event =
// })

export default router;
