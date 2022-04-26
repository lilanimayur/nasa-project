import { Router } from "express";
import { getPlanets } from "../controllers/planets.controller";

export const planetsRouter = Router();

planetsRouter.get("/", getPlanets);
