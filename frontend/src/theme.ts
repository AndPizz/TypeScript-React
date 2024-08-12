import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b",
    },
    secondary: {
      main: "#004d40", 
    },
    background: {
      default: "#f4f6f8", 
      paper: "#ffffff", 
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#333333",
    },
    h6: {
      fontWeight: 400,
      fontSize: "1.25rem",
      color: "#666666",
    },
    button: {
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
