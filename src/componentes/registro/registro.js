import React from "react";
import "./registro.css"
import Navbar from "../navbar/navbar";
//Maqueta 
function Registro() {
  return (
    
    <>
        <Navbar />
        <div className="registro-container">
        
        <h2>Registro</h2>
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" />

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />

            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" />

            <button type="submit">Registrarse</button>
        </form>
        </div>
    </>
    );
}

export default Registro;