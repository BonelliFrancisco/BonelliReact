import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/listaProductos" className="navbar-brand">
          Mi Tienda
        </Link>
        <div className="navbar-links">
          <Link to="/listaProductos" className="navbar-link">
            Lista Productos
          </Link>
          <Link to="/registro" className="navbar-link">
            Registro
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;