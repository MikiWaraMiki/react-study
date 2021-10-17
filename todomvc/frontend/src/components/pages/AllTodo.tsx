import { VFC } from 'react';
import { Todo } from '../../domain/todo/Todo';
import TodoForm from '../../containers/molecules/NewTodoForm';
import TodoList from '../../containers/oragnisms/TodoList';

type Props = {
  todoList: Todo[];
  add: (title: string) => void;
  completed: (id: number) => void;
  resetComplete: (id: number) => void;
};

const AllTodo: VFC<Props> = ({
  todoList = [],
  add = () => undefined,
  completed = () => undefined,
  resetComplete = () => undefined,
}) => (
  <>
    <TodoForm add={add} />
    <TodoList
      todoList={todoList}
      completed={completed}
      resetComplete={resetComplete}
    />
  </>
);

export default AllTodo;
