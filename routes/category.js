import express from "express";
const router = express.Router();
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

// /category
router.get("/", (req, res) => {
  res.send("This is the /category base");
});

export default router;
