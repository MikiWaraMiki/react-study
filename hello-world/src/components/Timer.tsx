import './Timer.css';
import { VFC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

type Props = {
  timeLeft?: number;
  isPrime?: boolean;
  reset?: () => void;
};

const Timer: VFC<Props> = ({
  timeLeft = 0,
  isPrime = false,
  reset = () => undefined,
}) => (
  <Card>
    <Statistic className="number-board">
      <Statistic.Label>time</Statistic.Label>
      <Statistic.Value className={isPrime ? 'prime-number' : undefined}>
        {timeLeft}
      </Statistic.Value>
    </Statistic>
    <Card.Content>
      <Button color="red" fluid onClick={reset}>
        <Icon name="redo" />
        reset
      </Button>
    </Card.Content>
  </Card>
);

export default Timer;
