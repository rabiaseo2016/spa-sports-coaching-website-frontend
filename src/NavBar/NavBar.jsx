import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.jpg"; //ADD THE LOGO HERE

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#304751" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO Area */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: 50, width: 50, borderRadius: "50%" }}
            />
          </Box>
          {/* LOGO Area */}

          {/* Menu */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="right">
                  <a
                    href="#register"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    REGISTER
                  </a>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Responsive Logo */}

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: 50, width: 50, borderRadius: "50%" }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a
                  href="#register"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  REGISTER
                </a>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
