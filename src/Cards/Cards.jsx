import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Cards = () => {
  return (
    <Grid container spacing={2} sx={{ my: 6 }}>
      {/* GRID ITEM START */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea
            sx={{ p: 3, textAlign: "left" }}
            style={{ backgroundColor: "#74CCF4", color: "black" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Private Class 1 on 1
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" style={{ fontWeight: "normal" }}>
                Improve your skills from beginner to competitive squash
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              backgroundColor: "#1ca3ec",
              fontWeight: "bold",
              color: "whitesmoke",
            }}
            sx={{ px: 4 }}
          >
            <Typography variant="h5">FEE: HKD$650/hr</Typography>
          </CardActions>
        </Card>
      </Grid>
      {/* GRID ITEM END */}
      {/* GRID ITEM START */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea
            sx={{ p: 3, textAlign: "left" }}
            style={{ backgroundColor: "#74CCF4", color: "black" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Private Class 1 on 2
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" style={{ fontWeight: "normal" }}>
                Enjoy Squash with your friends!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              backgroundColor: "#1ca3ec",
              fontWeight: "bold",
              color: "whitesmoke",
            }}
            sx={{ px: 4 }}
          >
            <Typography variant="h5">FEE: HKD$700/hr</Typography>
          </CardActions>
        </Card>
      </Grid>
      {/* GRID ITEM END */}
      {/* GRID ITEM START */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea
            sx={{ p: 3, textAlign: "left" }}
            style={{ backgroundColor: "#74CCF4", color: "black" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Group Training
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" style={{ fontWeight: "normal" }}>
                Gather 3 - 6 friends and enjoy Squash together !
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions
            style={{
              backgroundColor: "#1ca3ec",
              fontWeight: "bold",
              color: "whitesmoke",
            }}
            sx={{ px: 4 }}
          >
            <Typography variant="h5">FEE: HKD$1000/1.5 hrs</Typography>
          </CardActions>
        </Card>
      </Grid>
      {/* GRID ITEM END */}
    </Grid>
  );
};

export default Cards;
