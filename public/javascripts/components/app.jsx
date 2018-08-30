import React from 'react';
import SplashHeaderContainer from './splash/splash_header_container';
import SplashBody from './splash/splash_body';
import FooterBody from './global_footer/footer_body';
import DashboardPage from './dashboard/dashboard_page';
import DashboardSidebarContainer from './dashboard/dashboard_sidebar_container';
import DashboardMain from './dashboard/dashboard_main';
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import LoginFormContainer from './splash/login_form_container';


import { Route,
         Switch } from 'react-router-dom';

const App = () => (
  <div>
      <AuthRoute exact path="/" component={SplashHeaderContainer} />
      <AuthRoute exact path="/" component={SplashBody} />
      <AuthRoute exact path="/" component={FooterBody} />
      <AuthRoute exact path="/" component={LoginFormContainer} />
      {/* <Switch> */}
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
        {/* <Route exact path="/dashboard" component={DashboardMain} /> */}
      {/* </Switch> */}
  </div>
)

export default App;