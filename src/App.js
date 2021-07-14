import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { InternalRoutes } from './constants/routes';
import MyCloud from './pages/my-cloud/my-cloud.component';
import OnBoarding from './pages/onboarding/onboarding.component';
import StorageManagement from './pages/storage-management/storage-management.component';

function App() {
  return (
    <Switch>
      <Route path={InternalRoutes.HOME} exact component={OnBoarding} />
      <Route path={InternalRoutes.MY_CLOUD} component={MyCloud} />
      <Route
        path={InternalRoutes.STORAGE_MANAGEMENT}
        component={StorageManagement}
      />
    </Switch>
  );
}

export default App;