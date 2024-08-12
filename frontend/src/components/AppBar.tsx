// src/components/AppBar.tsx
import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/games" color="inherit">
          All Games
        </Button>
        <Button component={Link} to="/slot-machine" color="inherit">
          Slot Machine
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
