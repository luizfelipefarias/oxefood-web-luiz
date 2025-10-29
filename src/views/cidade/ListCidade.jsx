import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import ModalDetalhesCidade from "./components/ModalDetalhesCidade";

export default function ListCidade() {
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();
    const [openModalDetalhes, setOpenModalDetalhes] = useState(false);

    const [lista, setLista] = useState([]);

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/cidade")
            .then((response) => {
                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true);
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/cidade/' + idRemover)
            .then((response) => {

                console.log('cidade removido com sucesso.')

                axios.get("http://localhost:8080/api/cidade")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover um cidade.')
            })
        setOpenModal(false)
    }


    return (
        <div>
            <MenuSistema tela={'cidade'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Cidade </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-cidade'
                        />

                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>Estado</Table.HeaderCell>

                                    <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(cidade => (

                                    <Table.Row key={cidade.id}>
                                        <Table.Cell>{cidade.nome}</Table.Cell>
                                        <Table.Cell>{cidade.estado.sigla}</Table.Cell>

                                        <Table.Cell textAlign='center' width={3}>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste cidade'
                                                icon>
                                                <Link to='/form-cidade' state={{ id: cidade.id }}><Icon name='edit' /></Link>
                                            </Button> &nbsp;

                                            <span onClick={() => { setOpenModalDetalhes(cidade.id) }}>
                                            <Button
                                                inverted
                                                circular
                                                color='blue'
                                                title='Clique aqui para ver os detalhes'
                                                icon>
                                                <Icon name='eye' />
                                            </Button> </span>
                                            <ModalDetalhesCidade openModal={openModalDetalhes === cidade.id} setOpenModal={setOpenModalDetalhes} cidade={cidade} />
                                            &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cidade'
                                                onClick={() => { confirmaRemover(cidade.id) }}
                                                icon>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>


        </div>
    )
}
