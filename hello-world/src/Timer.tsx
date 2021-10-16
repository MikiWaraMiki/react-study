import './Timer.css';
import { useCallback, useEffect, useMemo, useState, VFC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import { getPrimes } from 'util/math-tool';
import TextInput from './components/TextInput';

type TimerProps = {
  limit: number;
};

const Timer: VFC<TimerProps> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);

  const primes = useMemo(() => getPrimes(limit), [limit]);
  const reset = useCallback((): void => setTimeLeft(limit), [limit]);
  const tick = (): void => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  });

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value
          className={primes.includes(timeLeft) ? 'prime-number' : undefined}
        >
          {timeLeft}
        </Statistic.Value>
      </Statistic>
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          <Icon name="redo" />
          reset
        </Button>
      </Card.Content>
      <TextInput />
    </Card>
  );
};

export default Timer;
