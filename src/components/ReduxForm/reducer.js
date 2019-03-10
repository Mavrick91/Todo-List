import { createReducer } from 'utils';
import C from 'utils/constant';

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
};

export default createReducer(initialState, HANDLERS);
