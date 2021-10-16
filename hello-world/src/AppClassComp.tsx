import {Component, ReactElement} from "react";
import './App.css'
import {Button, Card, Statistic, Icon} from "semantic-ui-react";

const LIMIT = 60
type State = { timeLeft: number }

class AppClassComp extends Component<unknown, State> {
  // eslint-disable-next-line react/sort-comp
  timerId: NodeJS.Timer | null = null

  constructor(props: unknown) {
    super(props);
    this.state = { timeLeft: LIMIT }
  }

  // コンポーネントがマウントされた直後
  componentDidMount = (): void => {
    this.timerId = setInterval(this.tick, 1000)
  }

  // コンポーネントが再レンダリングされた直後
  componentDidUpdate = (): void => {
    const {timeLeft} = this.state
    if (timeLeft === 0 ) this.reset()
  }

  // コンポーネントがアンマウントされて破棄される直前
  componentWillUnmount = (): void => {
    if (this.timerId) clearInterval(this.timerId)
  }

  tick = (): void =>
    this.setState((prevState) => ({timeLeft: prevState.timeLeft - 1}))

  reset = (): void =>
    this.setState({timeLeft: LIMIT} )

  render(): ReactElement {
    const { timeLeft } = this.state

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.reset}>
                <Icon name="redo"/>
                Reset
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default AppClassComp
