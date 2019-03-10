import { reducer as formReducer } from 'redux-form';
import todoReducer from "modules/todo/reducer";

export default {
  todo: todoReducer,
  form: formReducer,
};