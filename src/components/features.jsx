import React from "react";
import { Box, Typography } from "@mui/material";

export const Features = (props) => {
  return (
    <Box id="features" sx={{ textAlign: "center" }}>
      <Box className="container">
        <Typography
          variant="h2"
          sx={{
            marginBottom: "70px",
            textTransform: "uppercase",
            fontWeight: 800,
            fontSize: "36px",
            color: "#333",
            fontFamily: "'Raleway', sans-serif",
            position: "relative",
          }}
        >
          Features
          <Box
            sx={{
              position: "absolute",
              background: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
              height: "4px",
              width: "60px",
              bottom: "0",
              marginLeft: "-30px",
              left: "50%",
              marginTop: "10px",
            }}
          />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8rem",
          }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <Box
                  key={`${d.title}-${i}`}
                  sx={{
                    width: "100%",
                    maxWidth: "200px",
                    textAlign: "center",
                    margin: "0 1rem 2rem",
                  }}
                >
                  <i className={d.icon}></i>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "1rem",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#333",
                    }}
                  >
                    {d.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "15px" }}>
                    {d.text}
                  </Typography>
                </Box>
              ))
            : "Loading..."}
        </Box>
      </Box>
    </Box>
  );
};
