import React from 'react'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{placeItems:"center"}}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit">
            <AllInclusiveIcon />
          </IconButton>
          <Typography variant="h5">Infinity</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
