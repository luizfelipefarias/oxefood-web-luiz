import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function FormCategoriaProduto() {

    const { state } = useLocation();
    const [idCategoria, setIdCategoria] = useState();

    const [descricao, setDescricao] = useState();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/categoria-produto/" + state.id)
                .then((response) => {
                    setIdCategoria(response.data.id);
                    setDescricao(response.data.descricao);
                })
        }
    }, [state])



    const salvar = () => {

        let categoriaRequest = {
            descricao: descricao
        }

        if (idCategoria != null) { //Alteração:
            axios.put("http://localhost:8080/api/categoria-produto/" + idCategoria, categoriaRequest)
                .then((response) => { console.log('Categoria alterada com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar um categoria.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/categoria-produto", categoriaRequest)
                .then((response) => { console.log('Categoria cadastrada com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o categoria.') })
        }


    }

    return (
        <div>

            <MenuSistema tela={'categoria'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Categoria &nbsp;<Icon name='angle double right' size="small" /> </span> {idCategoria === undefined ? 'Cadastro' : 'Alteração'} </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>


                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'
                                    maxLength="100"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />

                            </Form.Group>
                        </Form>


                        <Link to={'/list-categoria'}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                        </Link>

                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='blue'
                            floated='right'
                            onClick={() => { salvar() }}
                        >
                            <Icon name='save' />
                            Salvar
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}
