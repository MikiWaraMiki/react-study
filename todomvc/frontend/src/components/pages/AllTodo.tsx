import { VFC } from 'react';
import { Todo } from '../../domain/todo/Todo';
import TodoForm from '../../containers/molecules/NewTodoForm';
import TodoList from '../../containers/oragnisms/TodoList';

type Props = {
  todoList: Todo[];
  add: (title: string) => void;
};

const AllTodo: VFC<Props> = ({ todoList = [], add = () => undefined }) => (
  <>
    <TodoForm add={add} />
    <TodoList todoList={todoList} />
  </>
);

export default AllTodo;
