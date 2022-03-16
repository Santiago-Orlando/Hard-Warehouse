import * as React from "react";
import { Link } from "react-router-dom";
import { BiCartAlt, BiSearchAlt2 } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { sendLogoutRequest, persistUser } from "../store/user";
import { searchProducts } from "../store/products";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useInput from "../hooks/useInput";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Navbar = () => {
  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const search = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const products = useSelector((state) => state.products.data);

  console.log('CARRITO NAV', user.data.carrito.length )
  useEffect(() => {
    dispatch(persistUser());
  }, []);

  const logOut = () => {
    dispatch(sendLogoutRequest());
    alert("Deslogueo exitoso.");
    navigate("/");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchProducts({ title: search.value }));
    navigate("/search");
  };

  return (
    <nav>
      <div className="navbarContainer">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="categorias">
              <h3>Hard-WareHouse</h3>
            </Link>
          </div>
          <div className="cartNavContainer">
            <BiSearchAlt2 className="searchIcon" />
            <form onSubmit={handleSearch}>
              <input {...search} type="text" />
            </form>
            {user.data ? (
              <button onClick={logOut} className="log_reg">
                LogOut
              </button>
            ) : (
              <Link className="log_reg" to="login">
                LogIn
              </Link>
            )}
            {user.data ? (
              <h3>{user.data.fullName}</h3>
            ) : (
              <Link className="log_reg" to="registro">
                Sign Up
              </Link>
            )}
            <Link to="/carrito">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={user.data.carrito.length} color="primary">
                  <ShoppingCartIcon className="cartIcon" />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
        </div>
        <div>
          <div className="navbarCategorias">
            <Link className="categorias" to="productos">
              <h5>PRODUCTOS</h5>
            </Link>
            <Link className="categorias" to="productos/electronics">
              <h5>Componentes</h5>
            </Link>
            <Link className="categorias" to="productos/jewelery">
              <h5>Equipos armados</h5>
            </Link>
            <Link className="categorias" to="productos/men's clothing">
              <h5>Notebooks</h5>
            </Link>
            <Link className="categorias" to="productos/women's clothing">
              <h5>Monitores</h5>
            </Link>
            <Link className="categorias" to="perifericos">
              <h5>Periféricos</h5>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
