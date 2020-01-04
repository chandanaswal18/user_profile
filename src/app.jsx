import React from 'react';
import UsersDashboard from 'users_dashboard';
import UserProfile from 'user_profile';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={UsersDashboard} />
        <Route path="/user" component={UserProfile} />
      </div>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
