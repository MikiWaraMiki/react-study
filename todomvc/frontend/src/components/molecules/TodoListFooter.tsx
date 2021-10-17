import { VFC } from 'react';
import { Center, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

export const SelectedCategory = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETE: 'complete',
} as const;
export type SelectedCategoryType =
  typeof SelectedCategory[keyof typeof SelectedCategory];

export type TodoListFooterProps = {
  itemsNum: number;
  selectedCategory: SelectedCategoryType;
  onChangeCategory: (nextValue: SelectedCategoryType) => void;
};

const TodoListFooter: VFC<TodoListFooterProps> = ({
  itemsNum = 0,
  selectedCategory = SelectedCategory.ALL,
  onChangeCategory = () => undefined,
}) => (
  <Flex>
    <Center px="10">
      <Text fontSize="xs">{itemsNum} items left</Text>
    </Center>
    <RadioGroup
      defaultValue={SelectedCategory.ALL}
      onChange={onChangeCategory}
      value={selectedCategory}
    >
      <Stack spacing="3" direction="row">
        <Radio value={SelectedCategory.ALL}>all</Radio>
        <Radio value={SelectedCategory.ACTIVE}>active</Radio>
        <Radio value={SelectedCategory.COMPLETE}>complete</Radio>
      </Stack>
    </RadioGroup>
  </Flex>
);

export default TodoListFooter;
