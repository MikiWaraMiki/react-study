import './App.css';
import { VFC } from 'react';
import Timer from 'containers/Timer';
import { Redirect, Route, Switch } from 'react-router';
import Home from 'components/pages/Home';
import User from 'components/pages/User';
import NotFound from 'components/pages/404';

const App: VFC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Redirect from="/user/profile/:userId" to="/user/:userId" />
    <Route path="/user/:userId">
      <User />
    </Route>
    <Route path="/timer">
      <Timer limit={50} />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default App;
