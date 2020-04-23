import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import LoginForm from './components/loginform';
import Dashboard from './components/dashboard';
import { RealAuth } from './services/index';
function App() {
  return (
    <Router>      
      <Switch>
        <Route exact path="/">
          <LoginForm/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}



function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        RealAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default App;
