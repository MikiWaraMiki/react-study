import { ChangeEvent, VFC } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const NewTodoForm: VFC<Props> = ({
  value = '',
  onChange = () => undefined,
}) => (
  <Input
    placeholder="What needs to be done"
    size="lg"
    onChange={onChange}
    value={value}
  />
);

export default NewTodoForm;
