import { createReducer } from 'utils';
import C from './constants';

const initialState = {};

const HANDLERS = {
  [C.REGISTER_MODAL]: (state, { modalKey }) => ({
    ...state,
    [modalKey]: { open: false },
  }),
  [C.TOGGLE_MODAL]: (state, { modalKey, status, payload }) => ({
    ...state,
    [modalKey]: { open: status, payload },
  }),
};

export default createReducer(initialState, HANDLERS);
