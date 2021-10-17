import { VFC } from 'react';
import ColorfulBeads from 'components/molecules/ColorfulBeads';
import CounterBoard, {
  CounterBoardProps,
} from 'components/organisms/CounterBoard';

const CounterWidget: VFC<Required<CounterBoardProps>> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
  reset = () => undefined,
}) => (
  <>
    <CounterBoard {...{ count, add, decrement, increment, reset }} />
    <ColorfulBeads count={count} />
  </>
);

export default CounterWidget;
