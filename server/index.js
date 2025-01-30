import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
