import { VFC } from 'react';
import useTodos from '../../hooks/todo/todo-hooks';
import AllTodo from '../../components/pages/AllTodo';

const EnhancedAllTodo: VFC = () => {
  const { todoList, add, completed } = useTodos();

  return <AllTodo todoList={todoList} add={add} completed={completed} />;
};

export default EnhancedAllTodo;
