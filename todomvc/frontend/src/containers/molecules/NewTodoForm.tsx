import { ChangeEvent, useState, VFC } from 'react';
import NewTodoForm from '../../components/molecules/NewTodoForm';

const EnhancedNewTodoForm: VFC = () => {
  const [title, setTitle] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;

    setTitle(val);
  };

  return <NewTodoForm value={title} onChange={onChange} />;
};

export default EnhancedNewTodoForm;
