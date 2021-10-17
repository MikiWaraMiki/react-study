export type TodoResponse = {
  id: number;
  title: string;
  createdAt: Date;
  completedAt?: Date | null;
};

export const genTodoList = (
  activeTaskNum: number,
  completeTaskNum: number,
): TodoResponse[] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const activeTaskList: TodoResponse[] = [...Array(activeTaskNum)].map(
    (_, i) => ({
      id: 10 * (i + 1),
      title: `未完了タスク${i + 1}`,
      createdAt: new Date(),
      completedAt: null,
    }),
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const completedTaskList: TodoResponse[] = [...Array(completeTaskNum)].map(
    (_, i) => ({
      id: 20 * (i + 1),
      title: `完了タスク${i + 1}`,
      createdAt: new Date(),
      completedAt: new Date(),
    }),
  );

  return [...activeTaskList, ...completedTaskList];
};
