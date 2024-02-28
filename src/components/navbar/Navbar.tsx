import { Link, useNavigate } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full bg-red-500 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Farmacia</div>

          <div className="flex gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <div className="hover:underline">Produtos</div>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <div className="hover:underline">Cadastrar Categoria</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
