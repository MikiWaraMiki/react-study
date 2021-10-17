import { VFC } from 'react';
import TodoList from '../../components/organisms/TodoList';
import { Todo } from '../../domain/todo/Todo';

type Props = {
  todoList: Todo[];
};
const EnhancedTodoList: VFC<Props> = ({ todoList = [] }) => {
  const todoListRowProps = todoList.map((todo) => ({
    id: todo.id,
    title: todo.title,
    isComplete: !!todo.completedAt,
  }));

  return <TodoList todoList={todoListRowProps} />;
};

export default EnhancedTodoList;
