import express from "express";
const router = express.Router();
import fs from "fs";

function readCategories() {
  const categoryData = fs.readFileSync("./data/category.json");
  const parsedData = JSON.parse(categoryData);
  return parsedData;
}

// /events
router.get("/", (req, res) => {
  const categories = readCategories();
  res.json(categories);
});

export default router;
