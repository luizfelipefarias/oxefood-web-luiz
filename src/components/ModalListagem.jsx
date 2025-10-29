import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react'

export default function ModalListagem({ isOpen, setIsOpen, titulo, lista, clienteId }) {
    const clienteID = clienteId
    const [conteudo, setConteudo] = useState(lista)

    function confirmaRemover(id) {
        axios.delete("http://localhost:8080/api/cliente/endereco/" + id)
            .then((res) => {
                setConteudo(prevConteudo => prevConteudo.filter(item => item.id !== id));
            })
    }

    if (!conteudo || conteudo.length === 0) {
        return (
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Header icon>
                    <div>Lista de {titulo}</div>
                </Header>
                <Modal.Content>
                    <p>Nenhum dado disponível.</p>
                </Modal.Content>
                <Modal.Actions>
                    <Link to={'/form-endereco'} state={{ clienteId: clienteID }} >
                        <Button color='green' inverted>
                            <Icon name='plus' /> Adicionar
                        </Button>
                    </Link>
                    <Button color='red' inverted onClick={() => setIsOpen(false)}>
                        <Icon name='remove' /> Fechar
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

    return (
        <Modal
            closeIcon
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            open={isOpen}
        >
            <Header>
                <div>Lista de {titulo}</div>
            </Header>
            <Modal.Content>
                <Table color='orange' sortable celled>
                    <Table.Header>
                        <Table.Row>
                            {Object.keys(conteudo[0]).map(key => (
                                <Table.HeaderCell key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Table.HeaderCell>
                            ))}
                            <Table.HeaderCell>Ações</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {conteudo.map(item => (
                            <Table.Row key={item.id}>
                                {Object.keys(conteudo[0]).map(key => (
                                    <Table.Cell key={key}>{item[key]}</Table.Cell>
                                ))}

                                <Table.Cell textAlign='center' width={3}>
                                    <Button
                                        inverted
                                        circular
                                        color='green'
                                        title='Editar este item'
                                        icon
                                    >
                                        <Link to="/form-endereco" state={{ endereco: item, clienteId: clienteID }} style={{ color: 'green' }}>
                                            <Icon name='edit' />
                                        </Link>
                                    </Button>

                                    &nbsp;
                                    <Button
                                        inverted
                                        circular
                                        color='red'
                                        title='Remover este item'
                                        onClick={() => confirmaRemover(item.id)}
                                        icon
                                    >
                                        <Icon name='trash' />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Modal.Content>
            <Modal.Actions>
                <Link to={'/form-endereco'} state={{ clienteId: clienteID }} >
                    <Button color='green' inverted>
                        <Icon name='plus' /> Adicionar
                    </Button>
                </Link>
            </Modal.Actions>
        </Modal>

    )
}
