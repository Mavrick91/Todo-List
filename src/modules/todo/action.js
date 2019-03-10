// @flow

import C from './constant';

export const saveTodo = (payload: string): ReduxAction => ({
  type: C.SAVE_TODO,
  payload,
});

export const deleteTodo = (payload: number): ReduxAction => ({
  type: C.DELETE_TODO,
  payload,
});

export const toggleTodo = (payload: number): ReduxAction => ({
  type: C.TOGGLE_TODO,
  payload,
});
