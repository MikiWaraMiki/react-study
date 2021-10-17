import { VFC } from 'react';
import useTodos from '../../hooks/todo/todo-hooks';
import AllTodo from '../../components/pages/AllTodo';

const EnhancedAllTodo: VFC = () => {
  const { todoList, add, completed, resetComplete } = useTodos();

  return (
    <AllTodo
      todoList={todoList}
      add={add}
      completed={completed}
      resetComplete={resetComplete}
    />
  );
};

export default EnhancedAllTodo;
