import { VFC } from 'react';
import { Box, Checkbox, Text } from '@chakra-ui/react';

export type TodoRowProps = {
  text: string;
  status: 'active' | 'completed';
};
const TodoRow: VFC<TodoRowProps> = ({ text = '', status = 'active' }) => (
  <Box h="40px" color="white">
    <Checkbox isChecked={status === 'completed'} colorScheme="green" size="lg">
      <Text as={status === 'completed' ? 'del' : undefined} fontSize="lg">
        {text}
      </Text>
    </Checkbox>
  </Box>
);

export default TodoRow;
