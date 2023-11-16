import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./DetalleProducto.css";



function DetalleProducto() {
  const { id } = useParams(); //Para obtener el id
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(response => response.json())
      .then(data => {
        // Encuentra el producto por su ID en la lista de productos
        const productoEncontrado = data.products.find(item => item.id === parseInt(id, 10));

        if (productoEncontrado) {
          setProducto(productoEncontrado);
          setLoading(false);
        } else {
          console.error("Producto no encontrado");
          setLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    
    return (//Render de componentes, true muestra cargando, false muestra detalles 
      <>
         <Navbar />

        <div className="detalle-container">
        
        <h2>Detalle Producto</h2>
        <p>{producto.title}</p>
        <p>Precio: ${producto.price}</p>
        <p>Stock: {producto.stock}</p>
        <p>Categoría: {producto.category}</p>
        <p id="marca">Marca: {producto.brand}</p>
        <p id="id">ID: {producto.id}</p>
      
      </div>
    </>
    );
  }
}

export default DetalleProducto;