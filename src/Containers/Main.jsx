import { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Dashboard from '../apps/Dashboard/Dashboard';
import Mail from '../apps/Mail/Mail';
import Todo from '../apps/Todo/Todo';

export default function AppMain(props) {
  return (
    <Fragment>
      <Route path="/apps/dashboard">
        <Dashboard />
      </Route>
      <Route path="/apps/mail">
        <Mail />
      </Route>
      <Route path="/apps/todo">
        <Todo
          isSideNavOpen={props.isSideNavOpen}
        />
      </Route>
      <Redirect path="/" to="/apps/todo/all"/>
    </Fragment>
  )
};