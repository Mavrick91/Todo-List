// @flow

import C from './constants';

const saveTodo = (payload: string): ReduxAction => ({
  type: C.SAVE_TODO,
  payload,
});

const deleteTodo = (payload: number): ReduxAction => ({
  type: C.DELETE_TODO,
  payload,
});

const toggleTodo = (payload: number): ReduxAction => ({
  type: C.TOGGLE_TODO,
  payload,
});

const editTodo = (payload: {
  id: number,
  task: string,
  done: boolean,
}): ReduxAction => ({
  type: C.EDIT_TODO,
  payload,
});

export default {
  saveTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
};
