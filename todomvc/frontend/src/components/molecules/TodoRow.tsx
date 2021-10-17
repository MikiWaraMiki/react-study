import { VFC } from 'react';
import { Checkbox, Text } from '@chakra-ui/react';

export type TodoRowProps = {
  text: string;
  isComplete: boolean;
};
const TodoRow: VFC<TodoRowProps> = ({ text = '', isComplete = false }) => (
  <Checkbox isChecked={isComplete} colorScheme="green" size="lg">
    <Text as={isComplete ? 'del' : undefined} fontSize="lg">
      {text}
    </Text>
  </Checkbox>
);

export default TodoRow;
