import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import HomePage from './homepage/homepage';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './landing_page/session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute path="/messages" component={HomePage} />
    </header>
  </div>
);

export default App;

// <div>
// <header>
// <LandingPage />
// </header>
// </div>



// <Switch>
// <AuthRoute path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
// </Switch>

// <Link to="/" className="header-link">
// <h1>Slack</h1>
// </Link>
