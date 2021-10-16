import { Reducer } from 'redux';
import { CounterAction, CounterActionType as Type } from './actions';

export type CounterState = { count: number };
export const initialState: CounterState = { count: 0 };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case Type.ADD:
      return {
        count: state.count + (action.amount || 0),
      };
    case Type.DECREMENT:
      return {
        count: state.count - 1,
      };
    case Type.INCREMENT:
      return {
        count: state.count + 1,
      };
    case Type.RESET:
      return {
        count: 0,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
