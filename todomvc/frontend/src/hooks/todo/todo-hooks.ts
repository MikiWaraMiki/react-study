import { useCallback, useEffect, useState } from 'react';
import { Todo } from '../../domain/todo/Todo';
import { genTodoList } from '../../data/todo';

type ReturnValue = {
  todoList: Todo[];
  isLoading: boolean;
  fetch: () => void;
  add: (title: string) => void;
  deleteById: (id: number) => void;
};
const useTodos = (): ReturnValue => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = useCallback(() => {
    const todoResponse = genTodoList(10, 10);
    const list: Todo[] = todoResponse.map((todo) => ({
      id: todo.id,
      title: todo.title,
      createdAt: todo.createdAt,
      completedAt: todo.completedAt ?? null,
    }));

    setTodoList(list);
    setIsLoading(false);
  }, []);

  const add = useCallback((title: string) => {
    setTodoList((prev) => {
      const todo: Todo = {
        id: prev.length + 1,
        title,
        createdAt: new Date(),
        completedAt: null,
      };
      console.log(todo);

      return [...prev, todo];
    });
  }, []);

  const deleteById = useCallback((id: number) => {
    setTodoList((prev) => {
      const copy = [...prev];
      const todo = copy.find((t) => t.id === id);
      if (!todo) {
        return copy;
      }

      copy.splice(todo.id, 1);

      return copy;
    });
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    todoList,
    isLoading,
    fetch,
    add,
    deleteById,
  };
};

export default useTodos;
