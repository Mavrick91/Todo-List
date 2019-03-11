import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from "redux-form";
import { todoActions } from "modules/todo";
import ReduxForm from './ReduxForm';

const mapDispatchToProps = {
  saveTodo: todoActions.saveTodo,
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'todo' }),
)(ReduxForm);
