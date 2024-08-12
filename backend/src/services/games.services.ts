const fs = require("fs");
const path = "data/game-data.json";

/**
 * Idea is to generate 4 random numbers to get the required details of games set 
 * in those random indexes generated
 * 
 * @returns The Url, title and provider name of a game
 */


export const listGameUrls = async (): Promise<any> => {
  try {
    const data = fs.readFileSync(path, "utf8");
    const jsonData = JSON.parse(data);

    const imgDetails = [];
    const indexes: number[] = [];

    const min = 0;
    const max = jsonData.length;

    for (let i = 0; i < max; i++) {
      while (indexes.length < 4) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min || 0;

        if (!indexes.includes(num)) {
          if (jsonData[num]?.thumb?.url) {
            indexes.push(num);
            imgDetails.push({
              url: "https:" + jsonData[num]?.thumb?.url,
              title: jsonData[num]?.title,
              providerName: jsonData[num]?.providerName,
            });
          }
        }
      }
    }

    return { imgDetails };
  } catch (err) {
    console.error("Error:", err);
  }
};

/**
 Function to retrieve all data of all games for all games page
 * 
 * @returns The Url, title and provider name of all games
 */


export const listAllGamesData = async (): Promise<any> => {
  try {
    const data = fs.readFileSync(path, "utf8");
    const jsonData = JSON.parse(data);

    const imgDetails = [];

    for (let i = 0; i < jsonData.length; i++) {
      imgDetails.push({
        url: "https:" + jsonData[i]?.thumb?.url,
        title: jsonData[i]?.title,
        providerName: jsonData[i]?.providerName,
      });
    }

    return { imgDetails };
  } catch (err) {
    console.error("Error:", err);
  }
};



/**
 * Function to generate a random slot machine result with the reels provided.
 * Caluclate winnings and Calculates current balance
 * 
 * @param balance
 * @returns reelResults (1,2,3) , Winnings and currentBalance
 */


export const listSlotMachineResult = async (balance: number): Promise<any> => {
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
      } else if (reel1Result === "apple") {
        winnings = 20;
      } else if (reel1Result === "banana") {
        winnings = 15;
      } else if (reel1Result === "lemon") {
        winnings = 3;
      }
    } 
    // if not 3 in a row, there can only be 2 in a roew by reel1=reel2, reel2=reel3
    else if (reel1Result === reel2Result || reel2Result === reel3Result) {
      if (reel2Result === "cherry") {
        winnings = 40;
      } else if (reel2Result === "apple") {
        winnings = 10;
      } else if (reel2Result === "banana") {
        winnings = 5;
      } else if (reel2Result === "lemon") {
        winnings = 0;
      }
    } else {
      winnings = 0;
    }

    balance = winnings + balance;

    let slotData = { reel1Result, reel2Result, reel3Result, winnings, balance };

    return { slotData };
  } catch (err) {
    console.error("Error:", err);
  }
};
