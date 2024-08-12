# TypeScript React

A Material UI React dashboard together with a NodeJS typescript backend. Includes a slot machine simulation where the user starts with a fake balance of 20 and different combinations have different winnings.

## Setup Instructions

1. Open the frontend folder and backend folder separately found in the folder.
2. Run `npm install` in each folder.
3. Run both by using `npm start` for the frontend, and by running the debugger on the backend.
4. The frontend app should run on port 3001 whilst the backend should run on port 3000.

## Description of the App

The web app starts at a home page where featured games are displayed, allowing you to click a button that directs you to the all games page (since we cannot dynamically direct the user to the game itself).

### Header

The header, which can be found on every page, links to 3 different pages:
- Home
- All Games
- Slot Machine

### Home Page

- Displays featured games.
- Provides a button to navigate to the all games page.

### All Games Page

- Shows all the games in the JSON file with their picture, title, and provider. (JSON File Not Availabale on public repository.)
- Every card is clickable and has a link to the slot machine games (due to not having the possibility to link it to the actual game).
- Search functionality by title gives you instant filtered list.

### Slot Machine Page

- Allows the user to play the slot machine.
- Displays reel results, the balance, and shows winnings on every spin.
- If the balance reaches 0, the player will not be allowed to play any longer.


### Disclaimer

- This application is for entertainment purposes only. It is a simulated slot machine game with no real-money gambling features. No real money or prizes can be won or lost using this app.

By using this application, you acknowledge and agree that:

- No Actual Money Involved: This app does not involve or support any form of real-money gambling or transactions. Any virtual currency or credits used in the app have no real-world value and cannot be exchanged for real money.

- No Claims: You cannot claim any real-world rewards, money, or prizes from the creators of this app. The creators are not responsible for any perceived losses or missed opportunities to win real money.

- Entertainment Only: The app is purely for fun and entertainment. Any outcomes, wins, or losses within the app are completely random and have no correlation to real-world events or opportunities.

- No Legal Liability: The creators of this app are not liable for any misuse, misunderstandings, or damages resulting from the use of this app. By using this app, you waive any rights to hold the creators responsible in any legal, financial, or personal capacity.

- By continuing to use this application, you confirm that you understand and agree to these terms.