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
exports.listSlotMachineResult = exports.listAllGamesData = exports.listGameUrls = void 0;
const fs = require("fs");
const path = "data/game-data.json";
/**
 * Idea is to generate 4 random numbers to get the required details of games set
 * in those random indexes generated
 *
 * @returns The Url, title and provider name of a game
 */
const listGameUrls = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    try {
        const data = fs.readFileSync(path, "utf8");
        const jsonData = JSON.parse(data);
        const imgDetails = [];
        const indexes = [];
        const min = 0;
        const max = jsonData.length;
        for (let i = 0; i < max; i++) {
            while (indexes.length < 4) {
                let num = Math.floor(Math.random() * (max - min + 1)) + min || 0;
                if (!indexes.includes(num)) {
                    if ((_b = (_a = jsonData[num]) === null || _a === void 0 ? void 0 : _a.thumb) === null || _b === void 0 ? void 0 : _b.url) {
                        indexes.push(num);
                        imgDetails.push({
                            url: "https:" + ((_d = (_c = jsonData[num]) === null || _c === void 0 ? void 0 : _c.thumb) === null || _d === void 0 ? void 0 : _d.url),
                            title: (_e = jsonData[num]) === null || _e === void 0 ? void 0 : _e.title,
                            providerName: (_f = jsonData[num]) === null || _f === void 0 ? void 0 : _f.providerName,
                        });
                    }
                }
            }
        }
        return { imgDetails };
    }
    catch (err) {
        console.error("Error:", err);
    }
});
exports.listGameUrls = listGameUrls;
/**
 Function to retrieve all data of all games for all games page
 *
 * @returns The Url, title and provider name of all games
 */
const listAllGamesData = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const data = fs.readFileSync(path, "utf8");
        const jsonData = JSON.parse(data);
        const imgDetails = [];
        for (let i = 0; i < jsonData.length; i++) {
            imgDetails.push({
                url: "https:" + ((_b = (_a = jsonData[i]) === null || _a === void 0 ? void 0 : _a.thumb) === null || _b === void 0 ? void 0 : _b.url),
                title: (_c = jsonData[i]) === null || _c === void 0 ? void 0 : _c.title,
                providerName: (_d = jsonData[i]) === null || _d === void 0 ? void 0 : _d.providerName,
            });
        }
        return { imgDetails };
    }
    catch (err) {
        console.error("Error:", err);
    }
});
exports.listAllGamesData = listAllGamesData;
/**
 * Function to generate a random slot machine result with the reels provided.
 * Caluclate winnings and Calculates current balance
 *
 * @param balance
 * @returns reelResults (1,2,3) , Winnings and currentBalance
 */
const listSlotMachineResult = (balance) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let winnings = 0;
        balance = balance - 1;
        const reel1 = [
            "cherry",
            "lemon",
            "apple",
            "lemon",
            "banana",
            "banana",
            "lemon",
            "lemon",
        ];
        const reel2 = [
            "lemon",
            "apple",
            "lemon",
            "lemon",
            "cherry",
            "apple",
            "banana",
            "lemon",
        ];
        const reel3 = [
            "lemon",
            "apple",
            "lemon",
            "apple",
            "cherry",
            "lemon",
            "banana",
            "lemon",
        ];
        const reel1Result = reel1[Math.floor(Math.random() * reel1.length)];
        const reel2Result = reel2[Math.floor(Math.random() * reel2.length)];
        const reel3Result = reel3[Math.floor(Math.random() * reel3.length)];
        //since they need to be in order we set the winnings for gettin a 3 in a row result
        if (reel1Result === reel2Result && reel1Result === reel3Result) {
            if (reel1Result === "cherry") {
                winnings = 50;
            }
            else if (reel1Result === "apple") {
                winnings = 20;
            }
            else if (reel1Result === "banana") {
                winnings = 15;
            }
            else if (reel1Result === "lemon") {
                winnings = 3;
            }
        }
        // if not 3 in a row, there can only be 2 in a roew by reel1=reel2, reel2=reel3
        else if (reel1Result === reel2Result || reel2Result === reel3Result) {
            if (reel2Result === "cherry") {
                winnings = 40;
            }
            else if (reel2Result === "apple") {
                winnings = 10;
            }
            else if (reel2Result === "banana") {
                winnings = 5;
            }
            else if (reel2Result === "lemon") {
                winnings = 0;
            }
        }
        else {
            winnings = 0;
        }
        balance = winnings + balance;
        let slotData = { reel1Result, reel2Result, reel3Result, winnings, balance };
        return { slotData };
    }
    catch (err) {
        console.error("Error:", err);
    }
});
exports.listSlotMachineResult = listSlotMachineResult;
