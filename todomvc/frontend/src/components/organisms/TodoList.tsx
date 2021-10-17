import { VFC } from 'react';
import { StackDivider, VStack } from '@chakra-ui/react';
import { Todo } from '../../domain/todo/Todo';
import TodoRow from '../../containers/molecules/TodoRow';

type TodoListProps = {
  todoList: Todo[];
  completed: (id: number) => void;
};

const TodoList: VFC<TodoListProps> = ({ todoList = [], completed }) => (
  <VStack
    divider={<StackDivider borderColor="gray.200" />}
    align="stretch"
    margin="auto"
  >
    {todoList.map((todo) => (
      <TodoRow key={todo.id} todo={todo} completed={completed} />
    ))}
  </VStack>
);

export default TodoList;
