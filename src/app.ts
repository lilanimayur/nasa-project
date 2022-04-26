import express from "express";
import cors from "cors";
import morgan from "morgan";
import { planetsRouter } from "./routes/planets.route";
import { launchesRouter } from "./routes/launches.route";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
app.get("/", (req, res) => {
  res.status(400).json({
    error: "Invalid request url",
  });
});
