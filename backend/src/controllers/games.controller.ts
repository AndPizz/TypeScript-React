import { Request, Response } from "express";
import {
  listAllGamesData,
  listGameUrls,
  listSlotMachineResult,
} from "../services/games.services";
import { validateSlotMachine } from "../validators/slotValidator";


// get required data for all games page

export const getAllGamesData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await listAllGamesData();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Required home page data

export const getHomeGamesData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await listGameUrls();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Slot machine data and calculate balances and winnings

export const getSlotMachineResult = async (req: Request, res: Response) => {
  try {
    const { error, value } = validateSlotMachine(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const balance = req.body.balance;
    const data = await listSlotMachineResult(balance);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
