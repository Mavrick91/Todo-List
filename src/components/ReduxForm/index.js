import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from "redux-form";
import { saveTodo } from "modules/todo/action";
import ReduxForm from './ReduxForm';

const mapDispatchToProps = {
  saveTodo,
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'todo' }),
)(ReduxForm);
