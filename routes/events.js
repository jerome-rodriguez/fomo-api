import express from "express";
const router = express.Router();
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import coolImages from "cool-images";

function readEvents() {
  const eventsData = fs.readFileSync("./data/events.json");
  const parsedData = JSON.parse(eventsData);
  return parsedData;
}

// /events
router.get("/", (req, res) => {
  const events = readEvents();
  res.json(events);
});

router.post("/", (req, res) => {
  const events = readEvents();

  const newEvent = {
    id: uuidv4(),
    name: req.body.name,
    photo: coolImages.one(),
    date: req.body.date,
    time: req.body.time,
    location: req.body.location,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
  };

  events.unshift(newEvent);

  fs.writeFileSync("./data/events.json", JSON.stringify(events));

  res.status(201).json(newEvent);
});

export default router;
