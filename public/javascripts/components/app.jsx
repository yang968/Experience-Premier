import React from 'react';
import SplashHeaderContainer from './splash/splash_header_container';
import SplashBody from './splash/splash_body';
import FooterBody from './global_footer/footer_body';
import SpeechRecordContainer from './dashboard/speech_record_container';
// import LoginFormContainer from './splash/login_form_container';


import { Route,
         Switch } from 'react-router-dom';

const App = () => (
  <div>
    {/* <Switch> */}
      <Route exact path="/" component={SplashHeaderContainer} />
      <Route exact path="/" component={SplashBody} />
      <Route exact path="/" component={FooterBody} />
      <Route path="/dashboard" component={SpeechRecordContainer} />
    {/* </Switch> */}
  </div>
)

export default App;