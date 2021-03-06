import { createReducer } from 'utils';
import { find, findIndex, last, propEq, remove, update } from 'ramda';
import C from './constants';

const initialState = {
  allTodos: [{ id: 0, task: 'baba', done: false }],
};

const HANDLERS = {
  [C.SAVE_TODO]: (state = initialState, action) => {
    const lastId = last(state.allTodos) ? last(state.allTodos).id + 1 : 0;
    return {
      allTodos: [
        ...state.allTodos,
        {
          id: lastId,
          done: false,
          task: action.payload,
        },
      ],
    };
  },
  [C.DELETE_TODO]: (state = initialState, action) => {
    const { id } = action.payload;
    const index = findIndex(propEq('id', id))(state.allTodos);
    return { allTodos: remove(index, 1, state.allTodos) };
  },
  [C.TOGGLE_TODO]: (state = initialState, action) => {
    const { id } = action.payload;
    const index = findIndex(propEq('id', id))(state.allTodos);
    const todo = find(propEq('id', id))(state.allTodos);
    const { done } = todo;
    todo.done = !done;

    return { allTodos: update(index, todo, state.allTodos) };
  },
  [C.EDIT_TODO]: (state = initialState, action) => {
    const { payload } = action;
    const index = findIndex(propEq('id', payload.id))(state.allTodos);

    return { allTodos: update(index, payload, state.allTodos) };
  },
};

export default createReducer(initialState, HANDLERS);
