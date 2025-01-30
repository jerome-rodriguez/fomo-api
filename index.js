import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import events from "./routes/events.js";
import category from "./routes/category.js";

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/events", events);
app.use("/category", category);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
