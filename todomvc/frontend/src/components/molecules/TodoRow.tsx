import { ChangeEvent, VFC } from 'react';
import { Checkbox, Flex, IconButton, Spacer, Text } from '@chakra-ui/react';
import { MdClose } from 'react-icons/all';

export type TodoRowProps = {
  id: number;
  title: string;
  isComplete: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};
const TodoRow: VFC<TodoRowProps> = ({
  id = 0,
  title = '',
  isComplete = false,
  handleChange = () => undefined,
  handleClick = () => undefined,
}) => (
  <Flex>
    <Checkbox
      isChecked={isComplete}
      colorScheme="green"
      size="lg"
      onChange={handleChange}
    >
      <Text as={isComplete ? 'del' : undefined} fontSize="lg">
        {`${id}-${title}`}
      </Text>
    </Checkbox>
    <Spacer />
    <IconButton
      aria-label="delete-todo"
      icon={<MdClose />}
      size="sm"
      onClick={handleClick}
    />
  </Flex>
);

export default TodoRow;
