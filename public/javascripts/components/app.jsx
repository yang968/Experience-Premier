import React from 'react';
import SplashHeaderContainer from './splash/splash_header_container';
import SplashBody from './splash/splash_body';
import FooterBody from './global_footer/footer_body';
// import LoginFormContainer from './splash/login_form_container';
import TaskPage from './tasks/task';

const App = () => (
  <div>
    <SplashHeaderContainer />
    <SplashBody />
    <FooterBody />
  </div>
)

export default App;