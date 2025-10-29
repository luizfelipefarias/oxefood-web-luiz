import { Route, Routes } from "react-router-dom";

import FormCliente from "./views/cliente/FormCliente";
import FormEntregador from "./views/entregador/FormEntregador";
import Home from "./views/home/Home";
import FormProduto from "./views/produto/FormProduto";
import ListCliente from "./views/cliente/ListCliente";
import ListEntregador from "./views/entregador/ListEntregador";
import ListProdutos from "./views/produto/ListProdutos";
import FormCategoriaProduto from "./views/categoriaProduto/FormCategoriaProduto";
import ListCategoriaProduto from "./views/categoriaProduto/ListCategoriaProduto";
import FormEndereco from "./views/cliente/endereco/FormEndereco";
import FormCidade from "./views/cidade/FormCidade";
import ListCidade from "./views/cidade/ListCidade";

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="list-cliente" element={<ListCliente />} />
        <Route path="list-entregador" element={<ListEntregador />} />
        <Route path="list-produto" element={<ListProdutos />} />
        <Route path="/" element={<Home />} />
        <Route path="form-cliente" element={<FormCliente />} />
        <Route path="form-produto" element={<FormProduto />} />
        <Route path="form-entregador" element={<FormEntregador />} />
        <Route path="form-categoria" element={<FormCategoriaProduto />} />
        <Route path="list-categoria" element={<ListCategoriaProduto />} />
        <Route path="form-endereco" element={<FormEndereco />} />

        <Route path="form-cidade" element={<FormCidade />} />
        <Route path="list-cidade" element={<ListCidade />} />
      </Routes>
    </>
  );
}

export default Rotas;
