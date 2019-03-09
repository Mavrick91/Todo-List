import { reducer as formReducer } from 'redux-form';
import todoReducer from "components/ReduxForm/reducer";

export default {
  todo: todoReducer,
  form: formReducer,
};