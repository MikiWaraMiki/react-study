import { VFC } from 'react';
import TodoList from '../../components/organisms/TodoList';
import { Todo } from '../../domain/todo/Todo';

type Props = {
  todoList: Todo[];
  completed: (id: number) => void;
  resetComplete: (id: number) => void;
  deleted: (id: number) => void;
};
const EnhancedTodoList: VFC<Props> = ({
  todoList = [],
  completed,
  resetComplete,
  deleted,
}) => (
  <TodoList
    todoList={todoList}
    completed={completed}
    resetComplete={resetComplete}
    deleted={deleted}
  />
);

export default EnhancedTodoList;
