import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from "@material-ui/core";
import { deleteTodo } from "modules/todo/action";
import TodoList from './TodoList';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    allTodos: state.todo.allTodos,
  };
};

const mapDispatchToProps = {
  deleteTodo,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(TodoList);
