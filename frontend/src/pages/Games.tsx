import React, { useEffect, useState } from "react";
import api from "../utils/api";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Grid,
  CircularProgress,
  TextField,
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

const Games: React.FC = () => {
  // Initialize data as an empty array
  const [data, setData] = useState<GameImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ApiResponse>("/list-all-games-data");
        setData(response.data.imgDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter the data based on the search query
  const filteredData = data.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <Container sx={{ pt: 8 }}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Search Games"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>
        <Grid container spacing={2}>
          {filteredData.length > 0 ? (
            filteredData.map((game, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link to="/slot-machine" style={{ textDecoration: "none" }}>
                  <Card sx={{ height: "100%" }}>
                    {" "}
                    {/* Make card take full height */}
                    <CardMedia
                      component="img"
                      alt={game.title}
                      sx={{
                        width: "100%",
                        height: "auto", // Fixed height for uniformity
                        objectFit: "cover",
                      }}
                      image={game.url}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" noWrap>
                        {game.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: "right" }}
                      >
                        Provided by {game.providerName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                No games found.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Games;
