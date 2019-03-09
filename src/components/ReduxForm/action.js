// @flow

import C from 'utils/constant';

export const saveTodo = (payload: string): ReduxAction => ({
  type: C.SAVE_TODO,
  payload,
});
