import { ComponentMeta, ComponentStory } from '@storybook/react';
import TodoListFooter, {
  SelectedCategory,
  SelectedCategoryType,
} from '../TodoListFooter';

export default {
  component: TodoListFooter,
  title: 'molecules/TodoListFooter',
} as ComponentMeta<typeof TodoListFooter>;

const Template: ComponentStory<typeof TodoListFooter> = (args) => (
  <TodoListFooter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  itemsNum: 10,
  selectedCategory: SelectedCategory.ALL,
  onChangeCategory: (nextValue: SelectedCategoryType) => {
    console.log(nextValue);
  },
};
