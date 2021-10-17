import { ChangeEvent, useState, VFC, KeyboardEvent } from 'react';
import NewTodoForm from '../../components/molecules/NewTodoForm';

type Props = {
  add: (title: string) => void;
};
const EnhancedNewTodoForm: VFC<Props> = ({ add = () => undefined }) => {
  const [title, setTitle] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;

    setTitle(val);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && title !== '') {
      add(title);
      setTitle('');
    }
  };

  return (
    <NewTodoForm value={title} onChange={onChange} onKeyDown={onKeyDown} />
  );
};

export default EnhancedNewTodoForm;
