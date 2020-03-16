import React from 'react';

import { Container, Content } from './styles';
import logo from '~/assets/logo@2x.png';

import Language from '~/components/Language';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <Language />
      </Content>
    </Container>
  );
}
