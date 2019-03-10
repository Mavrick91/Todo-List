// @flow

import React from 'react';
import { Container } from 'reactstrap';
import Home from 'screens/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }
`;

const App = () => {
  return (
    <Container fluid>
      <GlobalStyle />
      <Home />
    </Container>
  );
};

export default App;
