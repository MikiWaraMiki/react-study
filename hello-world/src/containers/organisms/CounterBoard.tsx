import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterSlice, CounterState } from 'features/counter';
import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoard: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { added, decremented, incremented, reset } = counterSlice.actions;

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
      reset={() => dispatch(reset())}
    />
  );
};

export default EnhancedCounterBoard;
