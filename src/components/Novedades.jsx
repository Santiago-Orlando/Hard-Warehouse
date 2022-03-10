import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoryProducts } from "../store/products"
import {
  Container,
  Grid,
  ImageListItem,
  ImageList,
  Typography,
} from "@mui/material"

const Novedades = () => {
    const novedades = "electronics"
    const products = useSelector(state => state.products.data)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getCategoryProducts(novedades))
    }, [])
  
    console.log("PRODUCTS", products)
    return (
        <>
          <Container >
            <Typography component="h6" sx={{ mx: "auto", width: 200 }}>
              <p>Novedades</p>
            </Typography>
            <Grid container spacing={2}  >
              <ImageList sx={{ width: 500, height: 400 }} cols={6} rowHeight={100}>
                {products.map(item => (
                  <ImageListItem key={item.id}>
                    <img
                      src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Container>
        </>
      )
}

export default Novedades