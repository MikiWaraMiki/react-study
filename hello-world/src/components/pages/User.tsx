import { VFC } from 'react';
import HistoryButton from 'components/HistoryButton';
import { useRouteMatch } from 'react-router-dom';

const User: VFC = () => {
  const match = useRouteMatch();
  const { userId } = match.params as { userId: string };

  console.log(userId);
  console.log(match);

  return (
    <>
      <h1>User {userId}</h1>
      <HistoryButton />
    </>
  );
};

export default User;
