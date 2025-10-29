import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon, Radio } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import { Link, useLocation } from "react-router-dom";
import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import formatarData from "../../utils/FormatarData";

export default function FormCidade() {
    const { state } = useLocation();
    const [cidadeId, setCidadeId] = useState("");
    const [nome, setNome] = useState();
    const [estado, setEstado] = useState();
    const [qtdPopulacao, setQtdPopulacao] = useState();
    const [ehCapital, setEhCapital] = useState();
    const [dataFundacao, setDataFundacao] = useState();

    const [codigo, setCodigo] = useState("");


    const [listaEstados, setListaEstados] = useState([]);
    const [idEstado, setIdEstado] = useState();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get(`http://localhost:8080/api/cidade/${state.id}`)
                .then((res) => {
                    console.log("cidade edit:", res.data);
                    setCidadeId(res.data.id);

                    setNome(res.data.nome);
                    setEstado(res.data.estado);
                    setQtdPopulacao(res.data.qtdPopulacao);
                    setEhCapital(res.data.ehCapital);
                    setDataFundacao(formatarData(res.data.dataFundacao));

                    setIdEstado(res.data.estado.id)
                })
        }


        axios.get("http://localhost:8080/api/estado")
            .then((response) => {
                const dropDownEstados = response.data.map(c => ({ text: c.nome, value: c.id }));
                setListaEstados(dropDownEstados);
            })

    }, [])


    const salvar = () => {

        let cidadeRequest = {
            nome: nome,
            qtdPopulacao: qtdPopulacao,
            ehCapital: ehCapital,
            dataFundacao: dataFundacao,
            idEstado: idEstado,
        }

        console.log(">>>>", cidadeRequest)
        if (state != null && state.id != null) {
            axios.put("http://localhost:8080/api/cidade/" + cidadeId, cidadeRequest)
                .then((response) => {
                    console.log('cidade alterado com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao incluir o um cliente.')
                })
        } else {
            axios.post("http://localhost:8080/api/cidade", cidadeRequest)
                .then((response) => {
                    console.log('cidade cadastrado com sucesso.')
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
                                <Form.Input label='Nome' placeholder='Informe o nome da cidade' width={10} fluid value={nome} onChange={(e) => { setNome(e.target.value) }} required />

                                <Form.Select
                                    required
                                    fluid
                                    tabIndex='3'
                                    width={6}
                                    placeholder='Selecione'
                                    label='Estado'
                                    options={listaEstados}
                                    value={idEstado}
                                    onChange={(e, { value }) => {
                                        setIdEstado(value)
                                    }}
                                />
                            </Form.Group>



                            <Form.Group>
                                <Form.Input label='Quantidade de População' placeholder='Informe o tamanho da populaçao' width={8} fluid value={qtdPopulacao} onChange={(e) => { setQtdPopulacao(e.target.value) }} required />

                                <Form.Input
                                    fluid
                                    label='Data Fundação'
                                    width={8}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataFundacao}
                                        onChange={e => setDataFundacao(e.target.value)}
                                    />
                                </Form.Input>

                                
                            </Form.Group>

                            <Form.Group>
                                <Container width={10}>
                                    <span style={{ fontWeight: 'bold' }}>Capital: </span>

                                    <Radio
                                        label="Não"
                                        name="radioGroup"
                                        value={false}
                                        checked={ehCapital === false}
                                        onChange={() => setEhCapital(false)}
                                    />

                                    <span style={{ marginRight: '30px' }}> </span>

                                    <Radio
                                        style={{ marginLeft: '30px' }}
                                        label="Sim"
                                        name="radioGroup"
                                        value={true}
                                        checked={ehCapital === true}
                                        onChange={() => setEhCapital(true)}
                                    />
                                </Container>
                            </Form.Group>
                        </Form>
                    </div>

                    <Container fluid>
                        <Link to='/list-cidade'><Button content='Listar' icon='reply' labelPosition='left' color='yellow' basic style={{ borderRadius: '999px' }} /></Link>

                        <Button content='Salvar' icon='save' labelPosition='left' color='blue' basic circular floated='right' onClick={() => { salvar() }} />

                        
                    </Container>

                </Container>
            </div>
        </div>
    )
}
