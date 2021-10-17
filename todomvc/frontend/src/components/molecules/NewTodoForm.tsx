import { ChangeEvent, VFC, KeyboardEvent } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  add: (e: KeyboardEvent) => void;
};

const NewTodoForm: VFC<Props> = ({
  value = '',
  onChange = () => undefined,
  add = () => undefined,
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
      onKeyDown={add}
      value={value}
      pr="4.5rem"
    />
  </Flex>
);

export default NewTodoForm;
