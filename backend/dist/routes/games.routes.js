"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const games_controller_1 = require("../controllers/games.controller");
const router = (0, express_1.Router)();
router.get("/list-all-games-data", games_controller_1.getAllGamesData);
router.get("/list-home-games-data", games_controller_1.getHomeGamesData);
router.post("/slot-machine", games_controller_1.getSlotMachineResult);
exports.default = router;
