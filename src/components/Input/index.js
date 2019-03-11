// @flow

import type { FieldProps } from 'redux-form';
import type { Node } from 'react';
import React from 'react';
import { Input as InputStrap } from 'reactstrap';
import styled from 'styled-components';

type Props = FieldProps;

const InputStyled = styled(InputStrap)`
  && {
    height: 90px;
    margin-top: 30px;
    font-size: 40px;
  }

  &&:focus {
    border: 1px solid #ced4da;
    box-shadow: none;
  }
`;

const Input = ({ input }: Props): Node => {
  return <InputStyled {...input} />;
};
export default Input;
