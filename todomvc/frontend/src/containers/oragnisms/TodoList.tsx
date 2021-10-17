import { VFC } from 'react';
import { genTodoList } from '../../data/todo';
import TodoList from '../../components/organisms/TodoList';
import { TodoRowProps } from '../../components/molecules/TodoRow';

const EnhancedTodoList: VFC = () => {
  const todoList = genTodoList(10, 10);

  const todoListRowProps: TodoRowProps[] = todoList.map((todo) => ({
    id: todo.id,
    title: todo.title,
    isComplete: !!todo.completedAt,
  }));

  return <TodoList todoList={todoListRowProps} />;
};

export default EnhancedTodoList;
