import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { idArray } = useContext(CartContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(321deg, rgba(0, 0, 0, 0.4) 5.98%, rgba(0, 0, 0, 0.4) 66.28%), rgba(255, 255, 255, 0.12)",
        boxShadow: "-4.96px 2.48px 3.1px 0px rgba(0, 0, 0, 0.24)",
        backdropFilter: "blur(30px)",
        height: "55px",
        zIndex: 100,
        m :0
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "0 16px",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            fontFamily: "'Nico Moji', sans-serif",
            fontSize: { xs: '20px', md: '26px' }, // Responsive font size
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            '&:hover': { // Adding hover effect
              color: '#ffda32', // Change color on hover
            },
          }}
        >
          ChaloKahiChale
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            variant="body1"
            sx={{ marginRight: 2, color: '#fff', fontFamily: "'Mulish', sans-serif" }}
          >
            CartItems: {idArray.length}
          </Typography>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={idArray.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
