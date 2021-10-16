import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from 'reducer';
import CounterBoard from 'components/organisms/CounterBoard';
import { add, increment, decrement, reset } from 'actions';

const EnhancedCounterBoard: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
      reset={() => dispatch(reset())}
    />
  );
};

export default EnhancedCounterBoard;
