import React, { FC } from 'react';
import { useUser } from './hooks/user';
import { Nav } from './pages/nav';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { FirebaseContextProvider } from './firebase/context';

export const App: FC = () => {
  const [user, status] = useUser();
  return (
    <FirebaseContextProvider>
      <Router history={createBrowserHistory()}>
        <Nav {...status}></Nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </FirebaseContextProvider>
  );
};
