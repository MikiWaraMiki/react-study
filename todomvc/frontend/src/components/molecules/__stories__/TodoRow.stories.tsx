import { ComponentMeta, ComponentStory } from '@storybook/react';
import TodoRow from '../TodoRow';

export default {
  component: TodoRow,
  title: 'molecules/TodoRow',
} as ComponentMeta<typeof TodoRow>;

const Template: ComponentStory<typeof TodoRow> = (args) => (
  <TodoRow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Reactのコードをかく',
  isComplete: false,
};

export const Completed = Template.bind({});
Completed.args = {
  text: '完了済みタスクの場合',
  isComplete: true,
};
