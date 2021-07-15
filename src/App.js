import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { InternalRoutes } from './constants/routes';
import { signinUser } from './redux/user/user.actions';
import { users } from './data/users';

import LocalStorage from './pages/local-storage/local-storage.component';
import MyCloud from './pages/my-cloud/my-cloud.component';
import Notifications from './pages/notifications/notifications.component';
import OnBoarding from './pages/onboarding/onboarding.component';
import Profile from './pages/profile/profile.component';
import StorageManagement from './pages/storage-management/storage-management.component';

class App extends React.Component {
  componentDidMount() {
    const { signinUser } = this.props;

    signinUser(users[4]);//dummy user from user data
  }

  render() {
    return (
      <>
        <Switch>
          <Route path={InternalRoutes.HOME} exact component={OnBoarding} />
          <Route path={InternalRoutes.MY_CLOUD} component={MyCloud} />
          <Route
            path={InternalRoutes.STORAGE_MANAGEMENT}
            component={StorageManagement}
          />
          <Route exact path={InternalRoutes.PROFILE} component={Profile} />
          <Route path={InternalRoutes.LOCAL_STORAGE} component={LocalStorage} />
          <Route
            path={InternalRoutes.NOTIFICATIONS}
            component={Notifications}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (disptach) => ({
  signinUser: (user) => disptach(signinUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
