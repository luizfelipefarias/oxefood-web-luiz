import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListCliente from "./views/cliente/ListCliente";
import ListEntregador from "./views/entregador/ListEntregador";
import ListProdutos from "./views/produto/ListProdutos";

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="list-cliente" element={<ListCliente />} />
                <Route path="list-entregador" element={<ListEntregador />} />
                <Route path="list-produto" element={<ListProdutos />} />
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas
