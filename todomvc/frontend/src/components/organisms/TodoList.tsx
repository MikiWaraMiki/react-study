import { VFC } from 'react';
import { StackDivider, VStack } from '@chakra-ui/react';
import TodoRow, { TodoRowProps } from '../molecules/TodoRow';

type TodoListProps = {
  todoList: TodoRowProps[];
};

const TodoList: VFC<TodoListProps> = ({ todoList = [] }) => (
  <VStack
    divider={<StackDivider borderColor="gray.200" />}
    align="stretch"
    margin="auto"
  >
    {todoList.map((todo) => (
      <TodoRow text={todo.text} isComplete={todo.isComplete} />
    ))}
  </VStack>
);

export default TodoList;
