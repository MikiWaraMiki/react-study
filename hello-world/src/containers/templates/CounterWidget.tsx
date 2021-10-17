import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useReducer, VFC } from 'react';
import CounterWidget from 'components/templates/CounterWidget';

type CounterState = { count: number };

const initialState: CounterState = { count: 0 }; // dummy datas

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    incremented: (state) => ({ ...state, count: state.count + 1 }),
    reset: (state) => ({ ...state, count: initialState.count }),
  },
});

const EnhancedCounterWidget: VFC<{ initialCount?: number }> = ({
  initialCount = 0,
}) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count }),
  );

  const { added, decremented, incremented, reset } = counterSlice.actions;

  return (
    <CounterWidget
      count={state.count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
      reset={() => dispatch(reset())}
    />
  );
};

export default EnhancedCounterWidget;
