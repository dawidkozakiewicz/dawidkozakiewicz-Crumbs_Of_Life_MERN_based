import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch> {/* gdyby nie switch, nastąpiłaby egzekucja kodu w dół i route wróciłby do "/" */}
        <Route path="/" exact> {/* bez exact renderowałoby wszystko, co zaczyna się na "/" */}
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
