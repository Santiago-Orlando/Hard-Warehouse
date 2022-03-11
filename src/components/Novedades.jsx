import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Grid, Typography } from "@mui/material"
import { getCategoryProducts } from "../store/products"
import CardProduct from "./CardProduct"

const Novedades = () => {
  const novedades = "jewelery"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryProducts(novedades))
  }, [novedades])
  const products = useSelector(state => state.products.data)

  if (!products[0]) return <h3 className="letrasBlancas">No Data</h3>

  return (
    <>
      <div className="marginContainer">
        <Container>

          <Typography variant="subtitle1" sx={{ mx: "auto", width: 200, marginBottom:"25px"  }}>
            <p className="letrasBlancas">NOVEDADES</p>
          </Typography>

          <Grid container spacing={0}>
            {products.map(product => (
              <Grid item xs={3}>
                <Link to={`/producto/${product.id}`}>
                  <CardProduct
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rate={product.rating.rate}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Novedades
