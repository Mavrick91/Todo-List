// @flow

import React from "react";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Col, Row } from "reactstrap";
import styled from "styled-components";

type Todo = {
  id: number,
  task: string,
  done: boolean
};

type Props = {
  allTodos: Array<Todo>,
  deleteTodo: (number) => void,
  classes: any,
};

const WrapperList = styled(Row)`
  margin-top: 40px;
`;

const ColStyled = styled(Col)`
  height: 470px;
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
`;

const TextStyled = styled.div`
  display: flex;
  
  & > div {
    margin-left: 30px;
  }
`;

const CheckedTask = styled(Fab)`
  && {
    background: ${({ done }) => done ? 'limegreen' : 'white'};
    color: ${({ done }) => done ? 'while' : 'crimson'};
    
    &:hover {
    background-color: ${({ done }) => done ? 'limegreen' : 'white'};;
    }
  }
`;

const TodoList = ({ allTodos, classes, deleteTodo: deleteTodoAction }: Props) => {
  const deleteItem = ({ id }) => {
    deleteTodoAction(id);
  };

  return (
    <WrapperList noGutters>
      <ColStyled xs={{ size: 6, offset: 3 }}>
        {allTodos.map(todo => (
          <CustomTodo key={todo.id}>
            <TextStyled>
              <CheckedTask
                color="primary"
                done={todo.done}
              >
                {todo.done ? <CheckIcon /> : <ClearIcon />}
              </CheckedTask>
              <TextTodo>{todo.task}</TextTodo>
            </TextStyled>
            <div>
              <Button variant="contained" color="default" className={classes.button}>
                Edit
                <EditIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="secondary" className={classes.button} onClick={() => deleteItem(todo)}>
                Delete
                <DeleteIcon className={classes.rightIcon} />
              </Button>
            </div>
          </CustomTodo>
        ))}
      </ColStyled>
    </WrapperList>
  );
};

export default TodoList;
