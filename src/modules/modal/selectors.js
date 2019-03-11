import { createSelector } from 'reselect';

const selectModalState = state => state.modal;

const getStateModal = createSelector(
  (state, modalKey) => modalKey,
  selectModalState,
  (key, modalState) => modalState[key] && modalState[key].open,
);

export default {
  getStateModal,
};
