import { ChangeEvent, VFC } from 'react';
import { Todo } from '../../domain/todo/Todo';
import TodoRow from '../../components/molecules/TodoRow';

type Props = {
  todo: Todo;
  completed: (id: number) => void;
  resetComplete: (id: number) => void;
  deleted: (id: number) => void;
};

const EnhancedTodoRow: VFC<Props> = ({
  todo,
  completed,
  resetComplete,
  deleted,
}) => {
  const onCheckBoxChanged = (_: ChangeEvent<HTMLInputElement>) => {
    if (todo && !todo.completedAt) {
      completed(todo.id);
    } else {
      resetComplete(todo.id);
    }
  };

  const onDeleteButtonClick = () => {
    deleted(todo.id);
  };

  return (
    <TodoRow
      id={todo.id}
      title={todo.title}
      isComplete={!!todo.completedAt}
      handleChange={onCheckBoxChanged}
      handleClick={onDeleteButtonClick}
    />
  );
};

export default EnhancedTodoRow;
