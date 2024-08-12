import React, { useEffect, useState } from "react";
import api from "../utils/api";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import theme from "../theme";
import MenuBar from "../components/AppBar";
import { Link } from "react-router-dom";

interface GameImageData {
  url: string;
  title: string;
  providerName: string;
}

interface ApiResponse {
  imgDetails: GameImageData[];
}

const Home: React.FC = () => {
  const [data, setData] = useState<GameImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ApiResponse>("/list-home-games-data");
        setData(response.data.imgDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuBar />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
            paddingBottom: "50px",
            gap: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginBottom: 2,
              color: "#22303b",
              textAlign: "center",
              wordWrap: "break-word",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data[currentIndex].title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginBottom: 2,
              color: "#22303b",
              textAlign: "center",
              wordWrap: "break-word",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Provided by {data[currentIndex].providerName}
          </Typography>
          <Link to="/games" style={{ textDecoration: "none" }}>
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
            >
              Play Now!
            </Button>
          </Link>
          <Card sx={{ maxWidth: "100%", marginBottom: 2 }}>
            <CardMedia
              component="img"
              height="auto"
              image={data[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
