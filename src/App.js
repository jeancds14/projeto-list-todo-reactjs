import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';

import { Container, ContainerBody } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <ContainerBody>
        <Menu />
        <Home />
      </ContainerBody>
    </Container>
  );
}

export default App;
