import { createReducer } from 'utils';
import { findIndex, propEq, remove } from 'ramda';
import C from './constant';

const initialState = {
  allTodos: [
    { id: 0, done: false, task: 'baba' },
    { id: 1, done: true, task: 'baba' },
    { id: 2, done: false, task: 'baba' },
    { id: 3, done: false, task: 'baba' },
  ],
};

const HANDLERS = {
  [C.SAVE_TODO]: (state = initialState, action) => ({ allTodos: [...state.allTodos, action.payload] }),
  [C.DELETE_TODO]: (state = initialState, action) => {
    const { payload: id } = action;
    const index = findIndex(propEq('id', id))(state.allTodos);
    return { allTodos: remove(index, 1, state.allTodos) };
  },
};

export default createReducer(initialState, HANDLERS);
