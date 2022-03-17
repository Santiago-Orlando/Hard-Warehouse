import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Grid, Typography } from "@mui/material"
import { getSaleProducts } from "../store/products"
import CardProduct from "./CardProduct"
import Carousel from 'react-elastic-carousel'

const Ofertas = () => {
  const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 700, itemsToShow: 3},
    {width: 868, itemsToShow: 4},
  
  ]
  const dispatch = useDispatch()
  const ofertas = useSelector(state => state.products.sales)

  useEffect(() => {
    dispatch(getSaleProducts())
  }, [])

  if (ofertas.loading)
    return (
      <Typography
        variant="subtitle1"
        sx={{ mx: "auto", width: 200, marginBottom: "25px" }}
      >
        <h3>Loading...</h3>
      </Typography>
    )

  if (!ofertas[0])
    return (
      <Typography
        variant="subtitle1"
        sx={{ mx: "auto", width: 200, marginBottom: "25px" }}
      >
        <h3 className="letrasBlancas">No Data</h3>
      </Typography>
    )

  return (
    <>
      <div className="marginContainer">
        <Container>
          <Typography
            variant="subtitle1"
            sx={{ mx: "auto", width: 200, marginBottom: "25px" }}
          >
            <p className="letrasBlancas">OFERTAS</p>
          </Typography>

          <Grid container spacing={0}>
          <Carousel breakPoints = {breakPoints}>
            {ofertas.map(product => (
              <Grid key={product.id} item >
                <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none' }}>
                  <CardProduct
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rate={product.rating.rate}
                  />
                </Link>
              </Grid>
            ))}
            </Carousel>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Ofertas
