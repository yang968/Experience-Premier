import React from 'react';
import SplashHeaderContainer from './splash/splash_header_container';
import SplashBody from './splash/splash_body';
import FooterBody from './global_footer/footer_body';
import TaskContainer from './tasks/task_container';
// import LoginFormContainer from './splash/login_form_container';


import { Route,
         Switch } from 'react-router-dom';

const App = () => (
  <div>
    {/* <Switch> */}
      <Route exact path="/" component={SplashHeaderContainer} />
      <Route exact path="/" component={SplashBody} />
      <Route exact path="/" component={FooterBody} />
      <Route path="/task" component={TaskContainer} />
    {/* </Switch> */}
  </div>
)

export default App;