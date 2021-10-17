import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { randomUUID } from 'crypto';

type Task = {
  id: string;
  title: string;
  deadline?: Date;
  createdAt: Date;
};

export type TodoState = {
  todoList: { [id: string]: Task };
  doneList: { [id: string]: Task };
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { todoList: {}, doneList: {} } as TodoState,
  reducers: {
    taskCreated: (
      state,
      action: PayloadAction<Pick<Task, 'title' | 'deadline'>>,
    ) => {
      const id = randomUUID();
      const createdAt = new Date();
      /* eslint-disable-next-line no-param-reassign */
      state.todoList[id.toString()] = { ...action.payload, id, createdAt };
    },
    taskDone: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.todoList[id];

      if (task) {
        state.doneList[id] = { ...task };
        delete state.todoList[id];
      }
    },
    taskUpdated: (state, action: PayloadAction<Omit<Task, 'createdAt'>>) => {
      const { id, ...data } = action.payload;
      const task = state.todoList[id];

      if (task) state.todoList[id] = { ...task, ...data };
    },
  },
});
