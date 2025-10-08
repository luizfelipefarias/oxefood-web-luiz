import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import { Link, useLocation } from "react-router-dom";

export default function FormProduto() {

    const { state } = useLocation();
    const [produtoId, setProdutoId] = useState("");

    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valorUnitario, setValorUnitario] = useState(0);
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState(0);
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState(0);

    const [listaCategoria, setListaCategoria] = useState([]);
    const [idCategoria, setIdCategoria] = useState();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get(`http://localhost:8080/api/produto/${state.id}`)
                .then((res) => {
                    setProdutoId(res.data.id)
                    setCodigo(res.data.codigo)
                    setTitulo(res.data.titulo)
                    setDescricao(res.data.descricao)
                    setValorUnitario(res.data.valorUnitario)
                    setTempoEntregaMinimo(res.data.tempoEntregaMinimo)
                    setTempoEntregaMaximo(res.data.tempoEntregaMaximo)
                    setIdCategoria(res.data.idCategoria)
                })
        }


        axios.get("http://localhost:8080/api/categoria-produto")
            .then((response) => {
                const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
                setListaCategoria(dropDownCategorias);
            })

    }, [])


    const salvar = () => {

        let produtoRequest = {
            idCategoria: idCategoria,
            codigo: codigo,
            titulo: titulo,
            descricao: descricao,
            valorUnitario: Number(valorUnitario),
            tempoEntregaMinimo: Number(tempoEntregaMinimo),
            tempoEntregaMaximo: Number(tempoEntregaMaximo)
        }

        console.log(produtoRequest)
        if (state != null && state.id != null) {
            axios.put("http://localhost:8080/api/produto/" + produtoId, produtoRequest)
                .then((response) => {
                    console.log('Produto alterado com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao incluir o um cliente.')
                })
        } else {
            axios.post("http://localhost:8080/api/produto", produtoRequest)
                .then((response) => {
                    console.log('Produto cadastrado com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao incluir o um cliente.')
                })
        }
    }

    return (
        <div>

            <MenuSistema tela={'produto'} />

            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2><span style={{ color: 'darkgray' }}>Produto <Icon name="angle double right"></Icon></span> Cadastro</h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group>
                                <Form.Input label='Título' placeholder='Informe o título do produto' width={10} fluid value={titulo} onChange={(e) => { setTitulo(e.target.value) }} required />

                                <Form.Input label='Código do Produto' placeholder='Informe o código do produto' width={6} fluid value={codigo} onChange={(e) => { setCodigo(e.target.value) }} required />
                            </Form.Group>

                            <Form.Select
                                required
                                fluid
                                tabIndex='3'
                                placeholder='Selecione'
                                label='Categoria'
                                options={listaCategoria}
                                value={idCategoria}
                                onChange={(e, { value }) => {
                                    setIdCategoria(value)
                                }}
                            />

                            <Form.Group>
                                <Form.TextArea label='Descrição' placeholder='Informe a descrição do produto' width={16} fluid value={descricao} onChange={(e) => { setDescricao(e.target.value) }} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input label='Valor Unitário' type="number" width={6} step="00.01" min="1" fluid value={valorUnitario} onChange={(e) => { setValorUnitario(e.target.value) }} required />

                                <Form.Input label='Tempo de Entrege Máximo em Minutos' width={5} fluid value={tempoEntregaMinimo} onChange={(e) => { setTempoEntregaMinimo(e.target.value) }} />

                                <Form.Input label='Tempo de Entrege Mínimo em Minutos' width={5} fluid value={tempoEntregaMaximo} onChange={(e) => { setTempoEntregaMaximo(e.target.value) }} />

                            </Form.Group>
                        </Form>
                    </div>

                    <Container fluid>
                        <Link to='/list-produto'><Button content='Listar' icon='reply' labelPosition='left' color='yellow' basic style={{ borderRadius: '999px' }} /></Link>

                        <Button content='Salvar' icon='save' labelPosition='left' color='blue' basic circular floated='right' onClick={() => { salvar() }} />
                    </Container>

                </Container>
            </div>
        </div>
    )
}
