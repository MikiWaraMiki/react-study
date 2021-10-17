export type Todo = {
  id: number;
  title: string;
  createdAt: Date;
  completedAt: Date | null;
};

export const isCompleted = (todo: Todo): boolean => !!todo.completedAt;

export const isTodo = (arg: unknown): arg is Todo => {
  const t = arg as Todo;

  return (
    typeof t?.id === 'number' &&
    typeof t?.title === 'string' &&
    t?.createdAt instanceof Date &&
    t?.completedAt instanceof Date
  );
};
