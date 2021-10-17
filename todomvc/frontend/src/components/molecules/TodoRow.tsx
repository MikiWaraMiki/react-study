import { VFC } from 'react';
import { Checkbox, Text } from '@chakra-ui/react';

export type TodoRowProps = {
  id: number;
  title: string;
  isComplete: boolean;
};
const TodoRow: VFC<TodoRowProps> = ({ title = '', isComplete = false }) => (
  <Checkbox isChecked={isComplete} colorScheme="green" size="lg">
    <Text as={isComplete ? 'del' : undefined} fontSize="lg">
      {title}
    </Text>
  </Checkbox>
);

export default TodoRow;
