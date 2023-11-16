import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListaProductos from "./componentes/Listaproductos/ListaProductos";
import DetalleProducto from "./componentes/Detalleproducto/DetalleProducto";
import Registro from "./componentes/registro/registro";
import Login from "./componentes/login/login";

function App() {
  return (
    <>
      <BrowserRouter basename="/BonelliReact">
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/listaProductos" element={<ListaProductos />} />
        <Route path="/DetalleProducto/:id" element={<DetalleProducto />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />

        
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;