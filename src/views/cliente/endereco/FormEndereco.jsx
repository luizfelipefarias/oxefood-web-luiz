import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../../MenuSistema";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import estados from "../../../assets/data/estados.json"

export default function FormEndereco() {
    const { state } = useLocation();

    const [idEndereco, setIdEndereco] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [complemento, setComplemento] = useState();
    const [clienteId, setClienteId] = useState();


    useEffect(() => {
        
        if (state != null && state.endereco != null) {
            setIdEndereco(state.endereco.id);
            setRua(state.endereco.rua);
            setNumero(state.endereco.numero);
            setBairro(state.endereco.bairro);
            setCep(state.endereco.cep);
            setCidade(state.endereco.cidade);
            setEstado(state.endereco.estado);
            setComplemento(state.endereco.complemento);
        }
        
    }, [state])



    const salvar = () => {

        console.log(state)

        let enderecoRequest = {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            estado: estado,
            complemento: complemento,
        }

        if (idEndereco != null) { //Alteração:
            axios.put("http://localhost:8080/api/cliente/endereco/" + idEndereco, enderecoRequest)
                .then((response) => { console.log('endereço alterada com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar um endereço.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/cliente/endereco/"  + state.clienteId, enderecoRequest)
                .then((response) => { console.log('endereço cadastrada com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o endereço.') })
        }


    }

    return (
        <div>

            <MenuSistema tela={'cliente'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Categoria &nbsp;<Icon name='angle double right' size="small" /> </span> {idEndereco === undefined ? 'Cadastro' : 'Alteração'} </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>


                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    value={rua}
                                    onChange={(e) => {setRua(e.target.value)}}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    value={numero}
                                    onChange={(e) => {setNumero(e.target.value)}}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CEP'
                                    maxLength="100">
                                    <InputMask
                                        required
                                        mask="99999-999"
                                        value={cep}
                                        onChange={(e) => { setCep(e.target.value) }}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={12}
                                    value={bairro}
                                    onChange={(e) => {setBairro(e.target.value)}}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    maxLength="100"
                                    width={12}
                                    value={cidade}
                                    onChange={(e) => {setCidade(e.target.value)}}
                                />

                                <Container style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <Form.Select
                                        required
                                        fluid
                                        tabIndex='3'
                                        placeholder='Selecione'
                                        label='Estados'
                                        options={estados}
                                        value={estado}
                                        onChange={(e, { value }) => {
                                            setEstado(value)
                                        }}
                                    />
                                </Container>

                            </Form.Group>

                            <Form.Group>
                                <Form.TextArea label='Complemento' placeholder='Casa, Apartamento, Bloco, etc.' width={16} fluid value={complemento} onChange={(e) => { setComplemento(e.target.value) }} />
                            </Form.Group>

                        </Form>


                        <Link to={'/list-cliente'}>
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
