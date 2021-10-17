import { ChangeEvent, VFC } from 'react';
import { Checkbox, Text } from '@chakra-ui/react';

export type TodoRowProps = {
  id: number;
  title: string;
  isComplete: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const TodoRow: VFC<TodoRowProps> = ({
  id = 0,
  title = '',
  isComplete = false,
  handleChange = () => undefined,
}) => (
  <Checkbox
    isChecked={isComplete}
    T
    colorScheme="green"
    size="lg"
    onChange={handleChange}
  >
    <Text as={isComplete ? 'del' : undefined} fontSize="lg">
      {`${id}-${title}`}
    </Text>
  </Checkbox>
);

export default TodoRow;
