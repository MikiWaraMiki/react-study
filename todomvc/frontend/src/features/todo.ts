import { atom } from 'recoil';

const TodoListState = atom({
  key: 'todos',
  default: [],
});

export default TodoListState;
