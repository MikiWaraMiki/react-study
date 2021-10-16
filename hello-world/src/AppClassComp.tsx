// eslint-disable-next-line react/destructuring-assignment
import { Component, ReactElement, VFC } from 'react';
import './App.css';
import { Button, Card, Statistic, Icon } from 'semantic-ui-react';

const LIMIT = 60;
type InjectedProps = {
  count: number;
  reset: () => void;
  increment: () => void;
};
type Props = { max: number };
type State = { count: number };

const withCounter = (WrappedComponent: VFC<Props & Partial<InjectedProps>>) =>
  class EnhancedComponent extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { count: 0 };
    }

    reset = (): void => this.setState({ count: 0 });
    increment = (): void =>
      this.setState((prevState) => ({ count: prevState.count + 1 }));

    componentDidUpdate = (): void => {
      if (this.state.count > this.props.max) this.reset();
    };

    render = (): ReactElement => (
      <WrappedComponent
        max={this.props.max}
        count={this.state.count}
        reset={this.reset}
        increment={this.increment}
      />
    );
  };

const CounterComponent: VFC<Props & Partial<InjectedProps>> = ({
  max,
  count = 0,
  reset = () => undefined,
  increment = () => undefined
}) => (
  <div>
    <div>
      {count} / {max}
    </div>
    <button onClick={reset} type"button">
      Reset
    </button>
    <button onClick={increment} type={"button"}>
      +1
    </button>
  </div>
)

export default withCounter(CounterComponent)
