import { Link } from "react-router-dom";
import { BiCartAlt, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {

  const user = false

  const logOut = (event) => {
    event.preventDefault();
    alert('Deslogueo')
    
   
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
            <form>
              <input type="text" />
            </form>
            {user ? (
              <button onClick={logOut} className="logOut">
                LogOut
              </button>
            ) : (
              <Link className="log_reg" to="login">
                LogIn
              </Link>
            )}
            {user ? (
              <h3>{user.name}</h3>
            ) : (
              <Link className="log_reg" to="registro">
                Sign Up
              </Link>
            )}
            <BiCartAlt className="cartIcon" />
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
