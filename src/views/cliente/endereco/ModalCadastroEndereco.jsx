import { Link } from 'react-router-dom'
import { Button, Container, Form, Header, Icon, Modal } from 'semantic-ui-react'
import { useState } from 'react';
import InputMask from 'comigo-tech-react-input-mask/lib/react-input-mask.development';
import estados from "../../../assets/data/estados.json"



export default function ModalCadastroEndereco({ isOpen, setIsOpen, enderecoData, setEnderecoData}) {

    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [complemento, setComplemento] = useState();

    const salvar = () => {

        let enderecoRequest = {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            estado: estado,
            complemento: complemento,
        }

        setEnderecoData(enderecoRequest)
        setIsOpen(false)
    }

    return (
        <Modal
            closeIcon
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            open={isOpen}
            trigger={
            !enderecoData ? 
            <Button color='blue' inverted floated='right' circular><Icon name='plus'/> Cadastrar endereco</Button> : 
            <Button color='blue' inverted floated='right' circular>Ver endereco</Button>
        }>
            <Header>
                <div>Cadastrar endereço</div>
            </Header>
            <Modal.Content>
                <Form>
                    <Form.Group widths='equal'>

                        <Form.Input
                            required
                            fluid
                            label='Rua'
                            maxLength="100"
                            value={rua}
                            onChange={(e) => { setRua(e.target.value) }}
                        />

                        <Form.Input
                            required
                            fluid
                            label='Número'
                            maxLength="100"
                            value={numero}
                            onChange={(e) => { setNumero(e.target.value) }}
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
                            onChange={(e) => { setBairro(e.target.value) }}
                        />

                        <Form.Input
                            required
                            fluid
                            label='Cidade'
                            maxLength="100"
                            width={12}
                            value={cidade}
                            onChange={(e) => { setCidade(e.target.value) }}
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
            </Modal.Content>
            <Modal.Actions>
                
                    <Button color='green' inverted onClick={() => salvar()}>
                        <Icon name='checked' /> Salvar
                    </Button>
            </Modal.Actions>
        </Modal>
    )
}
