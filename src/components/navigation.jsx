import React from "react";
import { AppBar, Toolbar, Button, Box, Typography, Link } from "@mui/material";

export const Navigation = (props) => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", color: "black" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {}}
          >
            {/* Your menu icon here */}
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="#page-top" color="inherit" underline="none">
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "24px",
                  color: "#333",
                  textTransform: "uppercase",
                }}
              >
                Source India
              </Typography>
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            "& > *": {
              marginLeft: 2,
              fontSize: "15px",
              color: "#555",
              fontWeight: 400,
              margin: "9px 20px 0",
              padding: "8px 2px",
            },
          }}
        >
          <Button color="inherit" href="#features">
            Features
          </Button>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#services">
            Services
          </Button>
          <Button color="inherit" href="#team">
            Team
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
