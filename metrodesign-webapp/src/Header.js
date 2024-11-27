import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#052C4B' }}>
      <Toolbar>
        {/* Logo and Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            MetroDesign
          </Button>
        </Box>

        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Services
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
