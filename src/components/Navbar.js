import React from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit">
          <AllInclusiveIcon />
        </IconButton>
        <Typography variant="h5">Infinity</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
