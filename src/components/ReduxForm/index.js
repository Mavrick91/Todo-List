// @flow

import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import type { FieldProps } from 'redux-form';

import { reduxForm, Field } from 'redux-form';
import { compose } from "recompose";
import styled from 'styled-components';
import { Input, Row, Col } from 'reactstrap';
import { saveTodo } from "./action";

type Props = {
  handleSubmit: ((any) => void) => void,
  saveTodo: (payload: any) => void
};

const InputStyled = styled(Input)`
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

const renderField = (fields: FieldProps): Node => <InputStyled {...fields.input} />;

const ReduxForm = ({ handleSubmit, saveTodo: saveTodoAction }: Props) => {

  const onSubmit = (values) => {
    saveTodoAction(values.todo);
  };

  return (
    <Row noGutters>
      <Col xs={{ size: 6, offset: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field component={renderField} type="text" name="todo" />
        </form>
      </Col>
    </Row>
  );
};


export default compose(
  reduxForm({ form: 'todo' }),
  connect(null, { saveTodo }),
)(ReduxForm);