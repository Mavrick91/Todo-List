// @flow

import React from 'react';
import { pathOr } from 'ramda';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';
import { Input } from 'components';
import { reduxForm, Field } from 'redux-form';
import { todoActions } from '../../../modules/todo';
import { modalActions } from '../../../modules/modal';
import C from '../../../modules/modal/constants';

const WrapperModal = styled.div`
  padding: 20px;
`;

const ModalTitle = styled.h2`
  color: #555;
`;

const EditTodoModal = ({
  handleSubmit,
  payload,
  updateTodo: updateTodoAction,
  toggleModal,
}) => {
  const onSubmit = values => {
    payload.task = values.task;
    updateTodoAction(payload);
    toggleModal(C.EDIT_TODO_MODAL, false, null);
  };

  return (
    <WrapperModal>
      <ModalTitle>Edit this task</ModalTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="task" type="text" component={Input} />
      </form>
    </WrapperModal>
  );
};

const mapStateToProps = (state, props) => ({
  initialValues: {
    task: pathOr('', ['payload', 'task'], props),
  },
});

export default compose(
  connect(
    mapStateToProps,
    { updateTodo: todoActions.editTodo, toggleModal: modalActions.toggleModal },
  ),
  reduxForm({
    form: 'edit_todo',
  }),
)(EditTodoModal);
