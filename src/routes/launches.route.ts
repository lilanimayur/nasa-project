import { Router } from "express";
import {
  httpGetAllLaunches,
  httpPostLaunches,
  httpAbortLaunches,
  httpDeleteLaunches,
} from "../controllers/launches.controller";
export const launchesRouter = Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpPostLaunches);
launchesRouter.put("/", httpAbortLaunches);
launchesRouter.delete("/:flightNumber", httpDeleteLaunches);
