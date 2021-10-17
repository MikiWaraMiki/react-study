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
      text: 'タスク1',
      isComplete: true,
    },
    {
      text: 'タスク2',
      isComplete: false,
    },
  ],
};
