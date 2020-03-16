import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { Container, Content, Title, Box, BoxTitle } from './styles';

import Input from '~/components/Form/Input';

export default function SearchReservation() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Title>
          Olá! Este é o Easy Check-in do <span>Intercity Hotels</span>.
        </Title>
        <Box>
          <BoxTitle>Digite o número de sua reserva</BoxTitle>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="reservation" />
            <button type="submit">Buscar reserva</button>
          </Form>
          <Link to="/">Não lembro o número da minha reserva</Link>
        </Box>
      </Content>
    </Container>
  );
}
