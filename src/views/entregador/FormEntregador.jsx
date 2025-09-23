import InputMask from 'comigo-tech-react-input-mask';
import { Button, Checkbox, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
export default function FormEntregador() {

    return (

        <div>
<MenuSistema tela={'entregador'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid

                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={8}
                                    label='CPF'>
                                    <InputMask
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    width={8}
                                    label='RG'>
                                    <InputMask
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={4}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    label='Fone Celular'
                                    width={4}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />

                                </Form.Input>

                                <Form.Input
                                label="Fone Fixo"
                                width={4}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                width={3}
                                label = "QTD Entregas Realizadas"
                                >

                                </Form.Input>

                                 <Form.Input
                                width={3}
                                label = "QTD Entregas Realizadas"
                                >

                                </Form.Input>


                            </Form.Group>

                            <Form.Group>
                                 <Form.Input
                                width={15}
                                label = "Rua"
                                >

                                </Form.Input>

                                 <Form.Input
                                width={3}
                                label = "Numero"
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                 <Form.Input
                                width={8}
                                label = "Bairro"
                                >
                                </Form.Input>

                                 <Form.Input
                                width={5}
                                label = "Cidade"
                                >
                                </Form.Input>

                                 <Form.Input
                                width={3}
                                label = "CEP"
                                >
                                </Form.Input>
                            </Form.Group>

                           <Form.Group>
                            
                                <Form.Input
                                    fluid
                                    label='UF'
                                    width={16}
                                    >
                                </Form.Input>
        
                           </Form.Group>

                           <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Complemeto'
                                    width={16}
                                    >
                                </Form.Input>
                           </Form.Group>


                            <Form.Group>
                                <label >Ativo: </label>
                                <Checkbox
                                    style={{ marginLeft: '1%' }}
                                    label='sim'>
                    
                                </Checkbox>  

                                <Checkbox 
                                label='não'
                                style={{ marginLeft: '1%' }}>
                                    
                                </Checkbox>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

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

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}