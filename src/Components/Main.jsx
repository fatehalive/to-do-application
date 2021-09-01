import { Redirect, Route, Switch } from 'react-router-dom';
import Done from '../Containers/pages/Done';
import List from '../Containers/pages/List';
import Active from '../Containers/pages/Active';

function Main() {
  return (
    <main className="col-10 border">
      <Switch>
        <Route path='/all' component={List} />
        <Route path='/filter/active' component={Active} />
        <Route path='/filter/done' component={Done} />
        <Redirect from='/' to='/all' />
      </Switch>
    </main>
  );
}

export default Main;