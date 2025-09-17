import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEntregador() {
  return (
    <div>
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            <span style={{ color: 'darkgray' }}>
              Cliente &nbsp;<Icon name='angle double right' size="small" />
            </span> 
            Cadastro
          </h2>

          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
                <Form.Group widths='equal'>
                 <Form.Input
                    required
                    fluid
                    label='Nome'
                     width={4}
                     placeholder='Digite seu nome'
                 />   
                  <Form.Input
                    required
                    fluid
                    label='CPF'
                     width={4}>
                        
                    <InputMask
                    mask='111.111.111-11'
                    placeholder='111.111.111-11'/>
                  </Form.Input>   
                 
                  <Form.Input
                    fluid
                    label='RG'
                     width={4}
                     
                 >
                  <InputMask
                    mask='111.111.111'
                    placeholder='111.111.111'
                  />
                    </Form.Input>   

                </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}
