import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material"
import React from "react"

function CardProduct({ image, title, price, rate }) {
  return (
    <Grid conteiner>
      <Grid item xs={12}>
        <Container>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(231, 231, 231)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="subtitle" component="div">
                {title}
              </Typography>
            </CardContent>
            <CardMedia
              sx={{
                width: "100px",
              }}
              component="img"
              image={image}
              alt={title}
            />

            <CardActions>
              <Button size="small">Precio:{price}</Button>
              <Button size="small">valoracion:{rate}</Button>
            </CardActions>
          </Card>
        </Container>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  )
}

export default CardProduct
