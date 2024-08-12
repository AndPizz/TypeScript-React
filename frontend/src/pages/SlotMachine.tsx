import React, { useState } from "react";
import api from "../utils/api";
import MenuBar from "../components/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Tooltip } from "@mui/material";
import theme from "../theme";
import { Box, CircularProgress, Button, Grid, Typography } from "@mui/material";
import apple from "../assets/apple.png";
import banana from "../assets/banana.png";
import cherry from "../assets/cherry.png";
import lemon from "../assets/lemon.png";

interface SlotData {
  balance: number;
  winnings: number;
  reel1Result: string;
  reel2Result: string;
  reel3Result: string;
}

const initialImages = [apple, banana, cherry];

const SlotMachine: React.FC = () => {
  const [data, setData] = useState<SlotData>();
  const [images, setImages] = useState<string[]>(initialImages);
  const [balance, setBalance] = useState(20);
  const [winnings, setWinnings] = useState(0);
  const [loading, setLoading] = useState(false);

  const playSlotMachine = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    try {
      const response = await api.post("/slot-machine", { balance });
      setData(response.data.slotData);
      setBalance(response.data.slotData.balance);
      setWinnings(response.data.slotData.winnings);
      addImages([
        response.data.slotData.reel1Result,
        response.data.slotData.reel2Result,
        response.data.slotData.reel3Result,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to push corrcet images to array
  const addImages = (fruitNames: string[]) => {
    const finalImages: string[] = [];

    for (let i = 0; i < fruitNames.length; i++) {
      if (fruitNames[i] === "apple") {
        finalImages.push(apple);
      } else if (fruitNames[i] === "banana") {
        finalImages.push(banana);
      } else if (fruitNames[i] === "cherry") {
        finalImages.push(cherry);
      } else if (fruitNames[i] === "lemon") {
        finalImages.push(lemon);
      }
    }

    setImages(finalImages);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuBar />
      <Container>
        <div>
          <h1>Slot Machine</h1>
          {loading && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <CircularProgress />
            </Box>
          )}

          <Grid container spacing={2} justifyContent="center">
            {images.map((src, index) => (
              <Grid item xs={4} sm={3} md={2} key={index}>
                {" "}
                <Box
                  sx={{
                    width: "100%", // Use full width of grid item
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid black",
                  }}
                >
                  <img
                    src={src}
                    alt={`Slot ${index}`}
                    style={{ width: "100%", height: "auto", maxHeight: 200 }} // Responsive image
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Display balance and winnings */}
          <Box
            sx={{
              marginTop: 4,
              padding: 2,
              border: "1px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="h6">Balance: {balance} coins</Typography>
            <Typography variant="h6">Winnings: {winnings} coins</Typography>
          </Box>

          {/* Center the button and add margin */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            {balance <= 0 ? (
              <Tooltip title="Game not available as Balance is 0." arrow>
                <span>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1cae97",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        backgroundColor: "#17a86f",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                    onClick={playSlotMachine}
                    disabled
                  >
                    Play Slot Machine!
                  </Button>
                </span>
              </Tooltip>
            ) : (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1cae97",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: "#17a86f",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  },
                }}
                onClick={playSlotMachine}
              >
                Play Slot Machine!
              </Button>
            )}
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default SlotMachine;
