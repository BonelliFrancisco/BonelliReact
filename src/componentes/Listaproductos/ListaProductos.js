import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./ListaProductos.css"; // Asegúrate de que la ruta sea correcta


function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);  //Hooks

  useEffect(() => {  //Hooks para obtener los datos
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return ( //Renderizado de componentes 
    <div>
      
      <Navbar />
      <p>Listado de productos</p>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul className="productos-lista">
          {productos.map(producto => (
            <li key={producto.id} className="producto-item">
              <h3>{producto.title}</h3>
              <p>Precio: ${producto.price}</p>
              <Link to={`/DetalleProducto/${producto.id}`}>Ver Detalle</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaProductos;