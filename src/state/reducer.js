import { reducer as formReducer } from 'redux-form';
import todoReducer from 'modules/todo/reducer';
import modalReducer from 'modules/modal/reducer';

export default {
  modal: modalReducer,
  todo: todoReducer,
  form: formReducer,
};
