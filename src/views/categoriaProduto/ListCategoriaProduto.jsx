import { Button, Container, Divider, Header, Icon, Modal, Table } from "semantic-ui-react"
import MenuSistema from "../../MenuSistema"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListCategoriaProduto() {
  const [openModal, setOpenModal] = useState(false);
  const [idRemover, setIdRemover] = useState();


  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregarLista();
  }, [])

  function carregarLista() {

    axios.get("http://localhost:8080/api/categoria-produto")
      .then((response) => {
        setLista(response.data)
      })
  }

  function confirmaRemover(id) {
    setOpenModal(true);
    setIdRemover(id)
  }

  async function remover() {
  
         await axios.delete('http://localhost:8080/api/categoria-produto/' + idRemover)
         .then((response) => {
   
             console.log('categoria removida com sucesso.')
   
             axios.get("http://localhost:8080/api/categoria-produto")
             .then((response) => {
                 setLista(response.data)
             })
         })
         .catch((error) => {
             console.log('Erro ao remover uma categoria.')
         })
         setOpenModal(false)
     }

  return (
    <div>
      <MenuSistema tela={'categoria'} />
      <div style={{ marginTop: '3%' }}>

        <Container textAlign='justified' >

          <h2> Categoria </h2>
          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Button
              label='Novo'
              circular
              color='orange'
              icon='clipboard outline'
              floated='right'
              as={Link}
              to='/form-categoria'
            />

            <br /><br /><br />

            <Table color='orange' sortable celled>

              <Table.Header>
                <Table.Row>
                
                  <Table.HeaderCell>Descrição</Table.HeaderCell>
                  <Table.HeaderCell width={2}>Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>

                {lista.map(categoria => (

                  <Table.Row key={categoria.id}>
                  
                    <Table.Cell>{categoria.descricao}</Table.Cell>

                    <Table.Cell style={{width: 'fit-content'}}>
                      <Button
                        inverted
                        circular
                        color='green'
                        title='Clique aqui para editar os dados desta categoria'
                        icon>
                        <Link to="/form-categoria" state={{ id: categoria.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                      </Button>

                      &nbsp;
                      <Button
                        inverted
                        circular
                        color='red'
                        title='Clique aqui para remover esta categoria'
                        onClick={() => { confirmaRemover(categoria.id) }}
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
          <Button color='green' inverted onClick={() => { remover()}}>
            <Icon name='checkmark' /> Sim
          </Button>
        </Modal.Actions>
      </Modal>


    </div>
  )
}
