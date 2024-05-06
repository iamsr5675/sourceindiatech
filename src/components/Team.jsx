import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export const Team = (props) => {
  return (
    <div id="team" style={{ textAlign: "center" }}>
      <Container>
        <Typography
          variant="h1"
          gutterBottom
          style={{ fontWeight: "bold", color: "black" }}
        >
          Meet the Team
        </Typography>
        <Typography variant="h4" paragraph sx={{ marginBottom: "20px" }}>
          We are led by the team who constantly questions, think, and challenges
          to unlock great creativity around every turn.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {props.data
            ? props.data.map((d, i) => (
                <Grid key={`${d.name}-${i}`} item xs={12} sm={6} md={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia component="img" image={d.img} alt={d.name} sx={{borderRadius: 200}}/>
                    <CardContent>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{
                          marginBottom: "8px",
                        }}
                      >
                        {d.name}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{ marginBottom: "4px", fontWeight: "bold" }}
                      >
                        {d.job}
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        {d.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : "loading"}
        </Grid>
      </Container>
    </div>
  );
};
