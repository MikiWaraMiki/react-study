import { VFC } from 'react';
import useTimer from 'hooks/user-timer';
import Timer from 'components/Timer';

const EnhancedTimer: VFC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return <Timer timeLeft={timeLeft} isPrime={isPrime} reset={reset} />;
};

export default EnhancedTimer;
