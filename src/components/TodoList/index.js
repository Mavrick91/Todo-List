import { connect } from 'react-redux';
import { compose } from 'recompose';
import { modalActions } from 'modules/modal';
import { todoActions } from 'modules/todo';
import TodoList from './TodoList';

const mapStateToProps = state => {
  return {
    allTodos: state.todo.allTodos,
  };
};

const mapDispatchToProps = {
  deleteTodo: todoActions.deleteTodo,
  toggleTodo: todoActions.toggleTodo,
  toggleModal: modalActions.toggleModal,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TodoList);
