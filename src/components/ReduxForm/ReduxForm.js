// @flow

import React from 'react';
import { Field } from 'redux-form';
import { Col, Row } from 'reactstrap';
import { Input } from 'components'

type Props = {
  handleSubmit: ((any) => void) => void,
  saveTodo: (payload: any) => void
};

const ReduxForm = ({ handleSubmit, saveTodo: saveTodoAction }: Props) => {

  const onSubmit = (values) => {
    saveTodoAction(values.todo);
  };

  return (
    <Row noGutters>
      <Col xs={{ size: 6, offset: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field component={Input} type="text" name="todo" />
        </form>
      </Col>
    </Row>
  );
};


export default ReduxForm;