import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function CardProduct({ image, title, price, rate }) {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <h5 className="cardTitle">{title}</h5>

        <CardContent></CardContent>
        <CardMedia
          sx={{
            width: "80%",
          }}
          component="img"
          image={image}
          alt={title}
        />
      </div>
      <CardActions>
        <Button size="small">Precio:{price}</Button>
        <Button size="small">valoracion:{rate}</Button>
      </CardActions>

      <Grid item xs={12}></Grid>
    </div>
  );
}

export default CardProduct;
