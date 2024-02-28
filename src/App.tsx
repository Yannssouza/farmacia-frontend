import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import FormularioCategoria from "./components/categorias/formularioCategorias/FormularioCategoria";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route
              path="/cadastroCategoria"
              element={<FormularioCategoria />}
            />
            <Route
              path="/editarCategoria/:id"
              element={<FormularioCategoria />}
            />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
