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
                PRIVATE CLASS ONE
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" style={{ fontWeight: "normal" }}>
                One coach to one student
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
            <Typography variant="h5">FEE: $100</Typography>
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
                PRIVATE CLASS TWO
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" style={{ fontWeight: "normal" }}>
                One coach to two students
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
            <Typography variant="h5">FEE: $100</Typography>
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
                GROUP CLASS
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" style={{ fontWeight: "normal" }}>
                3 - 6.15 hours
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
            <Typography variant="h5">FEE: $100</Typography>
          </CardActions>
        </Card>
      </Grid>
      {/* GRID ITEM END */}
    </Grid>
  );
};

export default Cards;
