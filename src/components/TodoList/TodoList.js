// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

type Todo = {
  id: number,
  task: string,
  done: boolean,
};

type Props = {
  allTodos: Array<Todo>,
  deleteTodo: Todo => void,
  toggleTodo: Todo => void,
  classes: any,
};

const WrapperList = styled(Row)`
  margin-top: 40px;
`;

const ColStyled = styled(Col)`
  height: 470px;
`;

const ButtonStyled = styled(Button)`
  &:focus {
    outline: none;
  }
`;

const CustomTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 30px;
  }
`;

const TextTodo = styled.div`
  font-size: 30px;
  color: dimgray;
  ${({ done }) => done && 'text-decoration: line-through'};
`;

const TextStyled = styled.div`
  display: flex;

  & > div {
    margin-left: 30px;
  }
`;

const CheckedTask = styled(Fab)`
  && {
    background: ${({ done }) => (done ? 'limegreen' : 'white')};
    color: ${({ done }) => (done ? 'while' : 'crimson')};

    &:hover {
      background-color: ${({ done }) => (done ? 'limegreen' : 'white')};
    }
    &:focus {
      outline: none;
    }
  }
`;

const TodoList = ({
  allTodos,
  classes,
  deleteTodo: deleteTodoAction,
  toggleTodo: toggleTodoAction,
}: Props) => {
  return (
    <WrapperList noGutters>
      <ColStyled xs={{ size: 6, offset: 3 }}>
        {allTodos.map(todo => (
          <CustomTodo key={todo.id}>
            <TextStyled>
              <CheckedTask
                color="primary"
                done={todo.done ? todo.done.toString() : undefined}
                onClick={() => toggleTodoAction(todo)}
              >
                {todo.done ? <CheckIcon /> : <ClearIcon />}
              </CheckedTask>
              <TextTodo done={todo.done}>{todo.task}</TextTodo>
            </TextStyled>
            <div>
              <ButtonStyled
                variant="contained"
                color="default"
                className={classes.button}
              >
                Edit
                <EditIcon className={classes.rightIcon} />
              </ButtonStyled>
              <ButtonStyled
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => deleteTodoAction(todo)}
              >
                Delete
                <DeleteIcon className={classes.rightIcon} />
              </ButtonStyled>
            </div>
          </CustomTodo>
        ))}
      </ColStyled>
    </WrapperList>
  );
};

export default TodoList;
