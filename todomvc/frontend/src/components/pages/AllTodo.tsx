import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { Todo } from '../../domain/todo/Todo';
import TodoForm from '../../containers/molecules/NewTodoForm';
import TodoList from '../../containers/oragnisms/TodoList';

type Props = {
  todoList: Todo[];
  add: (title: string) => void;
  completed: (id: number) => void;
  resetComplete: (id: number) => void;
  deleted: (id: number) => void;
};

const AllTodo: VFC<Props> = ({
  todoList = [],
  add = () => undefined,
  completed = () => undefined,
  resetComplete = () => undefined,
  deleted = () => undefined,
}) => (
  <>
    <Box py="5">
      <TodoForm add={add} />
    </Box>
    <TodoList
      todoList={todoList}
      completed={completed}
      resetComplete={resetComplete}
      deleted={deleted}
    />
  </>
);

export default AllTodo;
