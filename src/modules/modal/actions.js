// @flow

import C from './constants';

const registerModal = (modalKey: string) => ({
  type: C.REGISTER_MODAL,
  modalKey,
});

const toggleModal = (modalKey: string, status: boolean, payload: any) => ({
  type: C.TOGGLE_MODAL,
  modalKey,
  status,
  payload,
});

export default {
  registerModal,
  toggleModal,
};
