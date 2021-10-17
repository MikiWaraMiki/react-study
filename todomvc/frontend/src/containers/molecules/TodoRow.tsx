import { ChangeEvent, VFC } from 'react';
import { Todo } from '../../domain/todo/Todo';
import TodoRow from '../../components/molecules/TodoRow';

type Props = {
  todo: Todo;
  completed: (id: number) => void;
};

const EnhancedTodoRow: VFC<Props> = ({ todo, completed }) => {
  const onCheckBoxChanged = (_: ChangeEvent<HTMLInputElement>) => {
    if (todo && !todo.completedAt) {
      completed(todo.id);
    }
  };

  return (
    <TodoRow
      id={todo.id}
      title={todo.title}
      isComplete={!!todo.completedAt}
      handleChange={onCheckBoxChanged}
    />
  );
};

export default EnhancedTodoRow;
