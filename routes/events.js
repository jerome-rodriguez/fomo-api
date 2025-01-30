import express from "express";
const router = express.Router();
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

router.get("/", (req, res) => {
  res.send("This is the /events base");
});

export default router;
