import React from 'react';
import { EditTodoModal } from 'screens/Home/Modal';
import C from 'modules/modal/constants'
import initialize from './initialize';

const EditTodo = initialize({ modalKey: C.EDIT_TODO_MODAL })(EditTodoModal);

export default () => <EditTodo />;
