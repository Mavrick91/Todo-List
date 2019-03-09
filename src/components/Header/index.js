import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

const CenterCol = styled(Col)`
  text-align: center;
  font-size: 118px;
  font-family: 'Shadows Into Light', cursive;
`;

function Header() {
  return (
    <Row noGutters>
      <CenterCol xs>TODO LIST</CenterCol>
    </Row>
  );
}

export default Header;
