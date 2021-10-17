import { ChangeEvent, VFC } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const NewTodoForm: VFC<Props> = ({
  value = '',
  onChange = () => undefined,
}) => (
  <Flex>
    <IconButton
      aria-label="Complete all"
      variant="unstyled"
      icon={<TriangleDownIcon />}
      my="auto"
      mr="4"
    />
    <Input
      placeholder="What needs to be done"
      size="lg"
      onChange={onChange}
      value={value}
      paddingX="6"
    />
  </Flex>
);

export default NewTodoForm;
