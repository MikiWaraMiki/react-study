import { VFC } from 'react';
import { genTodoList, TodoResponse } from '../../data/todo';
import TodoList from '../../components/organisms/TodoList';

const EnhancedTodoList: VFC = () => {
  const todoList: TodoResponse[] = genTodoList(10, 10);

  const todoListRowProps = todoList.map((todo) => ({
    id: todo.id,
    title: todo.title,
    isComplete: !!todo.completedAt,
  }));

  return <TodoList todoList={todoListRowProps} />;
};

export default EnhancedTodoList;
