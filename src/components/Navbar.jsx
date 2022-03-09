import { Link } from "react-router-dom";
import { BiCartAlt, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="navbarContainer">
        <div className="navbar">
          <div className="logo">
            <Link to='/' className="categorias">
              <h3>Hard-WareHouse</h3>
            </Link>
          </div>
          <div className="cartNavContainer">
            <BiSearchAlt2 className="searchIcon" />
            <form>
              <input type="text" />
            </form>
            <h4>Inicio / Registro</h4>
            <BiCartAlt className="cartIcon" />
          </div>
        </div>
        <div>
          <div className="navbarCategorias">
            <Link className="categorias" to="productos">
              <h5>PRODUCTOS</h5>
            </Link>
            <Link className="categorias" to="componentes">
              <h5>Componentes</h5>
            </Link>
            <Link className="categorias" to="equipos_armados">
              <h5>Equipos armados</h5>
            </Link>
            <Link className="categorias" to="notebooks">
              <h5>Notebooks</h5>
            </Link>
            <Link className="categorias" to="monitores">
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
