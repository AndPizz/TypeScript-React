import { Router } from "express";
import {
  getAllGamesData,
  getHomeGamesData,
  getSlotMachineResult,
} from "../controllers/games.controller";

const router = Router();

router.get("/list-all-games-data", getAllGamesData);

router.get("/list-home-games-data", getHomeGamesData);

router.post("/slot-machine", getSlotMachineResult);

export default router;
