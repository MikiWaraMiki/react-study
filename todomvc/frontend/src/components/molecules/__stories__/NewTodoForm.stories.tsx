import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, KeyboardEvent } from 'react';
import NewTodoForm from '../NewTodoForm';

export default {
  component: NewTodoForm,
  title: 'molecules/NewTodoForm',
} as ComponentMeta<typeof NewTodoForm>;

const Template: ComponentStory<typeof NewTodoForm> = (args) => (
  <NewTodoForm {...args} />
);

const value = '';
export const Default = Template.bind({});
Default.args = {
  value,
  onChange: (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
  onKeyDown: (e: KeyboardEvent) => {
    console.log(e.key);
  },
};
