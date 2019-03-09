import { createReducer } from 'utils';
import C from 'utils/constant';

const initialState = {
  allTodos: [],
};

const HANDLERS = {
  [C.SAVE_TODO]: (state = initialState, action) => ({ allTodos: [...state.allTodos, action.payload] }),
};

export default createReducer(initialState, HANDLERS);
