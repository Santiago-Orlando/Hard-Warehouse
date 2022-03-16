import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import { useNavigate } from "react-router";


import { Avatar, Button, Container, Divider, Grid, IconButton, Typography, } from '@mui/material'
import { DeleteForeverRounded, AddRounded, RemoveRounded, ShoppingCartOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts } from '../store/products';
import { persistUser } from '../store/user';


function ShoppingCart() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const productos = useSelector(state => state.products)
    //     const productosCarrito = useSelector(state => state.carrito)
    const user = useSelector(state => state.user)

    const [unidadCarrito, setUnidadCarrito] = useState(1)



    useEffect(() => {
        dispatch(getCategoryProducts("electronics"))
        // dispatch(getCategoryCartProducts()

        dispatch(persistUser())

    }, [dispatch])

    const addToUnitShoppingCart = (/*posicion*/event) => {
        event.preventDefault()
        setUnidadCarrito(unidadCarrito + 1)
        // productos[posicion].cantidad ++

    }
    const removeToUnitShoppingCart = (event) => {
        event.preventDefault()
        if (unidadCarrito <= 1) return alert("no se pueden extraer mas ")
        setUnidadCarrito(unidadCarrito - 1)

    }
    return (
        <>
            {(user.data.data) ?
                <>
                    <Grid container sx={{ margin: "80px 0px", alignItems: "center", color: "#13ffd5" }}>

                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                            <ShoppingCartOutlined sx={{ fontSize: "80px" }} />
                        </Grid>
                        <Grid item xs={8} >
                            <Typography variant="h4" component="div" gutterBottom>
                                Bienvenido a tu Carrito de compras {user.data.data.fullName}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Container>

                        <Grid container spacing={3} sx={{ backgroundColor: "rgb(231, 231, 231)", textAlign: "center", border: "solid 2px black", borderRadius: "10px" }}>

                            <Grid item xs={12} sx={{ textAlign: "left", }} >
                                <Typography variant="h6" component="span" gutterBottom >
                                    Descipción de tu pedido:

                                    <Divider />
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container  >

                                    <Grid item xs={5} sx={{ textAlign: "left" }}>
                                        <Typography variant="subtitle1" component="div" gutterBottom>
                                            Producto
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography variant="subtitle1" component="div" gutterBottom>
                                            Precio
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography variant="subtitle1" component="div" gutterBottom>
                                            Cantidad
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography variant="subtitle1" component="div" gutterBottom>
                                            Subtotal
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>

                                </Grid>
                            </Grid>



                            {(!productos.data[0]) ?

                                (<Grid item xs={12} >
                                    <Typography variant="subtitle1" component="div" gutterBottom >
                                        No hay ningun producto en tu carrito de compras
                                    </Typography>
                                </Grid>)
                                :


                                (productos.data.map(producto => (
                                    <Grid item xs={12} >
                                        <Grid container alignItems="center" sx={{ marginBottom: "10px", backgroundColor: "white", width: "98%" }}>
                                            <Grid item xs={1}>
                                                <Avatar variant="square" src={producto.image}>
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" component="div" gutterBottom >
                                                    {producto.title}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                ${producto.price}
                                            </Grid>
                                            <Grid item xs={2} >
                                                <Grid container alignItems="center">
                                                    <Grid item xs={4}>  <IconButton edge="end" aria-label="delete">
                                                        <RemoveRounded onClick={removeToUnitShoppingCart} />
                                                    </IconButton></Grid>
                                                    <Grid item xs={4}> <Typography variant="body2" gutterBottom>
                                                        {unidadCarrito}
                                                    </Typography></Grid>
                                                    <Grid item xs={4}> <IconButton edge="end" aria-label="delete">
                                                        <AddRounded onClick={addToUnitShoppingCart} />
                                                    </IconButton></Grid>

                                                </Grid>
                                            </Grid>
                                            <Grid item xs={2}>
                                                ${producto.price * unidadCarrito}
                                            </Grid>
                                            <Grid item xs={1}>

                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteForeverRounded />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )))}

                            <Grid container sx={{ margin: "30px 30px", justifyContent: "center" }} >

                                {(!productos.data[0]) ?
                                    <>
                                        <Grid item xs={6} sx={{ textAlign: "rigth", }} >
                                            <Typography variant="h5" component="span" gutterBottom >
                                                <Divider />
                                                Total a pagar
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}  >
                                            <Divider />

                                            <Typography variant="h5" component="span" gutterBottom >
                                                no hay productos
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button onClick={() => { navigate("/productos") }} variant="contained" size="large" sx={{ backgroundColor: "#13ffd5", marginBottom: "20px", color: "black", }}>
                                                ir a productos
                                            </Button>
                                        </Grid>
                                    </>

                                    :

                                    <>
                                        <Grid item xs={6} sx={{ textAlign: "rigth", }} >
                                            <Typography variant="h5" component="span" gutterBottom >
                                                <Divider />
                                                Total a pagar
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}  >
                                            <Divider />

                                            <Typography variant="h5" component="span" gutterBottom >
                                                $ 2000
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button onClick={() => { navigate("/productos") }} variant="contained" size="large" sx={{ textDecoration: "none", backgroundColor: "#13ffd5", marginBottom: "20px", color: "black", }}>
                                                Checkout
                                            </Button>
                                        </Grid>
                                    </>}
                            </Grid>
                        </Grid>
                    </Container>
                </>
                :
                (navigate("/login"))
            }
        </>
    )
}

export default ShoppingCart