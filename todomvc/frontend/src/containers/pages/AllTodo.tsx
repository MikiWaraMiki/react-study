import { useState, VFC } from 'react';
import useTodos from '../../hooks/todo/todo-hooks';
import AllTodo from '../../components/pages/AllTodo';
import {
  SelectedCategory,
  SelectedCategoryType,
} from '../../components/molecules/TodoListFooter';
import { Todo } from '../../domain/todo/Todo';

const EnhancedAllTodo: VFC = () => {
  const { todoList, add, completed, resetComplete, deleteById } = useTodos();

  const [category, setCategory] = useState<SelectedCategoryType>(
    SelectedCategory.ALL,
  );

  const changeCategory = (selectedCategory: SelectedCategoryType) => {
    setCategory(selectedCategory);
  };

  const displayTodoList = (): Todo[] => {
    if (category === SelectedCategory.ACTIVE)
      return todoList.filter((todo) => todo.completedAt === null);

    if (category === SelectedCategory.COMPLETE)
      return todoList.filter((todo) => !!todo.completedAt);

    return todoList;
  };

  return (
    <AllTodo
      todoList={displayTodoList()}
      selectedCategory={category}
      add={add}
      completed={completed}
      resetComplete={resetComplete}
      deleted={deleteById}
      changeCategory={changeCategory}
    />
  );
};

export default EnhancedAllTodo;
