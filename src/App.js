import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { InternalRoutes } from './constants/routes';
import MyCloud from './pages/my-cloud/my-cloud.component';
import OnBoarding from './pages/onboarding/onboarding.component';

function App() {
  return (
    <Switch>
      <Route path={InternalRoutes.HOME} exact component={OnBoarding} />
      <Route path={InternalRoutes.MY_CLOUD} exact component={MyCloud} />
    </Switch>
  );
}

export default App;
