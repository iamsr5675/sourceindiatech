import React from "react";
import { Box, AppBar, Typography, Button } from "@mui/material";

export const Header = (props) => {
  return (
    <AppBar position="static">
      <Box className="intro">
        <Box className="overlay">
          <Box className="container">
            <Box className="row">
              <Box className="col-md-8 col-md-offset-2 intro-text">
                <Typography variant="h1" gutterBottom>
                  {props.data ? props.data.title : "Loading"}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {props.data ? props.data.paragraph : "Loading"}
                </Typography>
                <Button
                  href="#features"
                  variant="contained"
                  size="large"
                  sx={{
                    fontFamily: "'Raleway', sans-serif",
                    textTransform: "uppercase",
                    color: "#fff",
                    bgcolor: "#5ca9fb",
                    backgroundImage:
                      "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                    padding: "14px 34px",
                    letterSpacing: "1px",
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: 500,
                    borderRadius: "25px",
                    transition: "all 0.5s linear",
                    border: 0,
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};
