import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../store/products";
import { Container, Grid } from "@mui/material";
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import { useSelect } from "@mui/base";


function AllProducts() {
  const { category } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.data);
  const searchedProducts = useSelector((state) => state.products.search);
  


  useEffect(() => {
    if (location.pathname === `/productos`) dispatch(getProducts());
    else dispatch(getCategoryProducts(category));
  }, [location]);

 

  return (
    <div className="marginContainer">
      <Container>
        <Grid container spacing={2}>
          {(location.pathname === "/search"
            ? searchedProducts
            : allProducts
          ).map((product) => (
            <Grid item xs={3}>
              <Link to={`/producto/${product._id}`} style={{ textDecoration: 'none' }}>
                <CardProduct
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AllProducts;
