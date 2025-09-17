import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon ,TextArea  } from 'semantic-ui-react';


export default function FormProduto (){

return(
    <div>
        <div style={{marginTop:'3%'}}>

            <Container textAlign="justified">
                <h2>
                    <span style={{color: "darkgray"}}> Produto &nbsp;<Icon name='angle double right' size="small" /> Cadastro</span>
                </h2>

                <Divider/>
                <div style={{marginTop:'4%'}}>
                   <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                         fluid
                         label='Titulo'
                         width={6}
                         required
                         placeholder="Informe o titulo do produto"
                        />
                        <Form.Input 
                        fluid
                        label='Codigo'
                        width={4}
                        required
                        placeholder="Informe o codigo do produto"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.TextArea
                        fluid
                        label='Descrição'
                        width={16}
                        placeholder='Informe a descrição do problema'
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Input
                            fluid
                            label='Valor unitario'
                            width='8'
                           required
                        />
                        <Form.Input
                            fluid
                            label='Tempo de entrega minimo em minutos'
                            width={5}
                            required>
                            <InputMask 
                                 mask="99"
                                 placeholder='30'
                            /> 
                        </Form.Input>
                        <Form.Input
                            fluid
                            label="Tempo de entrega maximo em minutos"
                            width={5}
                            required
                        >
                            <InputMask
                                mask="99"//Pensei em colocar mask="999" três digitos pois podem demorar 120 minutos
                                placeholder='40'
                            />
                        </Form.Input>
                    </Form.Group>
                   </Form>

                   <div style={{marginTop: '4%'}}>
                   
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