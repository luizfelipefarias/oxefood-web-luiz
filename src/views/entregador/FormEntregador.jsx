
import axios from "axios";
import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import { useState } from "react";
import { Button, Container, Divider, Form, Icon, Radio, Select } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [CPF, setCPF] = useState();
    const [RG, setRG] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [ativo, setAtivo] = useState();

    const salvar = () => {

        let entregadorRequest = {
            nome: nome,
            cpf: CPF,
            rg: RG,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoComplemento: enderecoComplemento,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            ativo: ativo,
        }

        axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then((response) => {
                console.log('Cliente cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um cliente.')
            })

        console.log(entregadorRequest)
    }

    return (
        <div>
            <MenuSistema tela={'entregador'} />

            <div style={{ padding: '3%' }}>
                <Container textAlign="justified">
                    <h1><span style={{ color: 'gray' }}>Entregador <Icon name="angle double right" /></span> Cadastro</h1>
                    <Divider />

                    <Form>
                        <Form.Group>
                            <Form.Input label='Nome' placeholder='' value={nome} onChange={(e) => { setNome(e.target.value) }} width={8} required />

                            <Form.Input label='CPF' placeholder='' width={4} required>
                                <InputMask
                                    required
                                    mask="999.999.999-99"
                                    value={CPF}
                                    onChange={(e) => { setCPF(e.target.value) }}
                                />
                            </Form.Input>

                            <Form.Input label='RG' placeholder='' value={RG} onChange={(e) => { setRG(e.target.value) }} width={4} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Input label='DT Nascimento' placeholder='Ex.: 11/09/2001' width={4}>
                                <InputMask
                                    required
                                    mask="99/99/9999"
                                    value={dataNascimento}
                                    onChange={(e) => { setDataNascimento(e.target.value) }}
                                />
                            </Form.Input>
                            <Form.Input label='Fone Celular' placeholder='' value={foneCelular} onChange={(e) => { setFoneCelular(e.target.value) }} width={4} />
                            <Form.Input label='Fone Fixo' placeholder='' value={foneFixo} onChange={(e) => { setFoneFixo(e.target.value) }} width={4} />
                            <Form.Input label='QTD Entregas Realizadas' placeholder='' value={qtdEntregasRealizadas} onChange={(e) => { setQtdEntregasRealizadas(e.target.value) }} width={4} />
                            <Form.Input label='Valor Por Frete' placeholder='' value={valorFrete} onChange={(e) => { setValorFrete(e.target.value) }} width={4} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Input label='Rua' value={enderecoRua} onChange={(e) => { setEnderecoRua(e.target.value) }} width={12} />

                            <Form.Input label='Número' value={enderecoNumero} onChange={(e) => { setEnderecoNumero(e.target.value) }} width={4} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Input label='Bairro' value={enderecoBairro} onChange={(e) => { setEnderecoBairro(e.target.value) }} width={7} />

                            <Form.Input label='Cidade' value={enderecoCidade} onChange={(e) => { setEnderecoCidade(e.target.value) }} width={7} />

                            <Form.Input label='CEP' value={enderecoCep} onChange={(e) => { setEnderecoCep(e.target.value) }} width={2} />
                        </Form.Group>


                        <Form.Group>
                            <Container >
                                <label htmlFor="SelectUF" style={{ fontWeight: 'bold' }}>UF</label><br />
                                <Select label='UF' width={16} fluid labeled='uf' placeholder={'Selecione'} value={enderecoUf} onChange={(e, { value }) => setEnderecoUf(value)} options={[{ key: '1', value: '1', text: '1' }]} id='SelectUF' />
                            </Container>
                        </Form.Group>


                        <Form.Group>
                            <Form.Input label='Complemento' value={enderecoComplemento} onChange={(e) => { setEnderecoComplemento(e.target.value) }} width={16} />
                        </Form.Group>


                        <Form.Group>
                            <Container width={10}>
                                <span style={{ fontWeight: 'bold' }}>Ativo: </span>

                                <Radio
                                    label="Não"
                                    name="radioGroup"
                                    value={false}
                                    checked={ativo === false}
                                    onChange={() => setAtivo(false)}
                                />

                                <span style={{ marginRight: '30px' }}> </span>

                                <Radio
                                    style={{ marginLeft: '30px' }}
                                    label="Sim"
                                    name="radioGroup"
                                    value={true}
                                    checked={ativo === true}
                                    onChange={() => setAtivo(true)}
                                />
                            </Container>

                        </Form.Group>

                        <Container fluid>
                            <Button content='Listar' icon='reply' labelPosition='left' color='yellow' basic style={{ borderRadius: '999px' }} />

                            <Button content='Salvar' icon='save' labelPosition='left' color='blue' basic circular onClick={() => { salvar() }} floated='right' />
                        </Container>
                    </Form>
                </Container>
            </div>
        </div>
    )
}
