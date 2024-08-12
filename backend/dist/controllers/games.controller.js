"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlotMachineResult = exports.getHomeGamesData = exports.getAllGamesData = void 0;
const games_services_1 = require("../services/games.services");
const slotValidator_1 = require("../validators/slotValidator");
// get required data for all games page
const getAllGamesData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, games_services_1.listAllGamesData)();
        res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllGamesData = getAllGamesData;
// Get Required home page data
const getHomeGamesData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, games_services_1.listGameUrls)();
        res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getHomeGamesData = getHomeGamesData;
// Get Slot machine data and calculate balances and winnings
const getSlotMachineResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = (0, slotValidator_1.validateSlotMachine)(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const balance = req.body.balance;
        const data = yield (0, games_services_1.listSlotMachineResult)(balance);
        res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getSlotMachineResult = getSlotMachineResult;
