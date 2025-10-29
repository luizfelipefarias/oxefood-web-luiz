import { Button, Container, Header, Icon, Modal } from "semantic-ui-react";
import formatarData from "../../../utils/FormatarData";
import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import { useState } from "react";

export default function ModalDetalhesCidade({ openModal, setOpenModal, cidade }) {
    const [isOpen, setIsOpen] = useState()


    return (
        <Modal
            closeIcon
            onClose={() => setOpenModal(false)}
            onOpen={() => setOpenModal(true)}
            open={openModal}
        >
            <Header style={{display: "flex"}}>
                <Icon name='eye'/>
                <div style={{ marginLeft: '10px' }}> Detalhes da cidade {cidade?.nome}</div>
            </Header>
            <Modal.Content>
                <Container fluid>
                    <p><span style={{ fontWeight: 'bold' }}>UF: </span>{cidade?.estado?.nome} ({cidade?.estado?.sigla})</p>
                    <p><span style={{ fontWeight: 'bold' }}>Nome: </span>{cidade?.nome}</p>
                    <p><span style={{ fontWeight: 'bold' }}>População: </span>{cidade?.qtdPopulacao}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Capital do estado: </span>{cidade?.ehCapital ? "Sim" : "Não"}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Data de fundação: </span>{formatarData(cidade?.dataFundacao)}</p>
                </Container>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted onClick={() => {setOpenModal(false)}}>
                    <Icon name='close' /> Fechar
                </Button>
            </Modal.Actions>
        </Modal >
    )
}
