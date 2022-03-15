import { Avatar, Container, Grid, IconButton, Typography } from "@mui/material"
import {
  DeleteForeverRounded,
  AddRounded,
  RemoveRounded,
} from "@mui/icons-material"

const AdminProductsList = () => {
  return (
    <>
      <Grid item xs={12}></Grid>
      <Container>
        <Grid
          container
          sx={{
            p: 3,
            backgroundColor: "rgb(231, 231, 231)",
            textAlign: "center",
            // border: "solid 2px black",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={12} sx={{ textAlign: "left", backgroundColor: "" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Lista de Productos
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              sx={{ border: "solid 2px black", borderRadius: "5px" }}
            >
              <Grid item xs={4}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Descripcion
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Precio
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Stock
                </Typography>
              </Grid>
              
              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Editar
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Eliminar
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container alignItems="center" sx={{ marginBottom: "10px" }}>
              {/* <Grid item xs={1}>
                <Avatar
                  variant="square"
                  src="https://www.dzoom.org.es/wp-content/uploads/2014/06/portadainspcuadr-810x540.jpg"
                >
                  N
                </Avatar>
              </Grid> */}

              <Grid item xs={4}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Titulo descriptivo del Producto
                </Typography>
              </Grid>

              <Grid item xs={2}>
                1000 $
              </Grid>

              <Grid item xs={2}>
                <Grid container alignItems="center">
                  <Grid item xs={5}>
                    {" "}
                    <IconButton edge="end" aria-label="delete">
                      <RemoveRounded />
                    </IconButton>
                  </Grid>
                  <Grid item xs={2}>
                    {" "}
                    <Typography variant="body2" gutterBottom>
                      2
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    {" "}
                    <IconButton edge="end" aria-label="delete">
                      <AddRounded />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={2}>
                2000
              </Grid>

              <Grid item xs={2}>
                <IconButton edge="end" aria-label="delete">
                  <DeleteForeverRounded />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AdminProductsList
