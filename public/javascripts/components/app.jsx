import React from 'react';
import SplashHeaderContainer from './splash/splash_header_container';
import SplashBody from './splash/splash_body';
import FooterBody from './global_footer/footer_body';
import DashboardPage from './dashboard/dashboard_page';
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import LoginFormContainer from './splash/login_form_container';


import { Route,
         Switch } from 'react-router-dom';

const App = () => (
  <div>
    {/* <Switch> */}
      <Route exact path="/" component={SplashHeaderContainer} />
      <Route exact path="/" component={SplashBody} />
      <Route exact path="/" component={FooterBody} />
      <Route exact path="/" component={LoginFormContainer} />>
      <Route exact path="/dashboard" component={DashboardPage} />
    {/* </Switch> */}
  </div>
)

export default App;