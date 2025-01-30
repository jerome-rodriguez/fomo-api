import express from "express";
const router = express.Router();
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

router.use(express.json());

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

// POST /events
router.post("/", (req, res) => {
  const events = readEvents();

  const newEvent = {
    id: uuidv4(),
    name: req.body.name,
    photo: "./public/photos/event-img.jpg",
    date: req.body.date,
    time: req.body.time,
    location: req.body.location,
    category: req.body.category, // drop down selector
    description: req.body.description,
    price: req.body.price,
  };

  console.log(req.body);
  // events.unshift(newEvent);

  // fs.writeFileSync("./data/events.json"), JSON.stringify(events);

  // res.json(newEvent);
});

export default router;
