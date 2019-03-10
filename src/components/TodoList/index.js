import { connect } from 'react-redux';
import { compose } from 'recompose';
import { deleteTodo, toggleTodo } from 'modules/todo/action';
import TodoList from './TodoList';

const mapStateToProps = state => {
  return {
    allTodos: state.todo.allTodos,
  };
};

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TodoList);
