import { ComponentMeta, ComponentStory } from '@storybook/react';
import TodoList from '../TodoList';

export default {
  component: TodoList,
  title: 'organisms/TodoList',
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  todoList: [
    {
      id: 1,
      title: 'タスク1',
      createdAt: new Date(),
      completedAt: null,
    },
    {
      id: 2,
      title: 'タスク2',
      createdAt: new Date(),
      completedAt: new Date(),
    },
  ],
};
