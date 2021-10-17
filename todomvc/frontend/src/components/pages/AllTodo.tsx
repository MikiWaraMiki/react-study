import { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { Todo } from '../../domain/todo/Todo';
import TodoForm from '../../containers/molecules/NewTodoForm';
import TodoList from '../../containers/oragnisms/TodoList';
import TodoListFooter, {
  SelectedCategory,
  SelectedCategoryType,
} from '../molecules/TodoListFooter';

type Props = {
  todoList: Todo[];
  selectedCategory: SelectedCategoryType;
  add: (title: string) => void;
  completed: (id: number) => void;
  resetComplete: (id: number) => void;
  deleted: (id: number) => void;
  changeCategory: (selectedCategory: SelectedCategoryType) => void;
};

const AllTodo: VFC<Props> = ({
  todoList = [],
  selectedCategory = SelectedCategory.ALL,
  add = () => undefined,
  completed = () => undefined,
  resetComplete = () => undefined,
  deleted = () => undefined,
  changeCategory = () => undefined,
}) => (
  <>
    <Box py="5">
      <TodoForm add={add} />
    </Box>
    <Box py="5">
      <TodoList
        todoList={todoList}
        completed={completed}
        resetComplete={resetComplete}
        deleted={deleted}
      />
    </Box>
    <Box>
      <TodoListFooter
        itemsNum={todoList.length}
        selectedCategory={selectedCategory}
        onChangeCategory={changeCategory}
      />
    </Box>
  </>
);

export default AllTodo;
