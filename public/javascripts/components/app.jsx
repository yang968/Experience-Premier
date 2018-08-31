import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util"

import SplashHeaderContainer from './splash/splash_header_container';
import SplashBody from './splash/splash_body';
import FooterBody from './global_footer/footer_body';
import LoginFormContainer from './splash/login_form_container';
import ContactPage from './info/contact_page';
import DashboardPage from './dashboard/dashboard_page';
import OverviewPage from './overview/overview_page';

import { Route,
         Switch } from 'react-router-dom';

const App = () => (
  <div>
      <AuthRoute path="/" component={SplashHeaderContainer} />
      <AuthRoute exact path="/" component={SplashBody} />
      <AuthRoute exact path="/" component={FooterBody} />
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <Route path="/contact" component={ContactPage} />
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <ProtectedRoute path="/overview" component={OverviewPage} />
  </div>
)

export default App;