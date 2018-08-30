import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import SpeechRecordContainer from "./speech_record_container";

const DashboardMain = () => (
  <div className="dashboard-main-container">
    <Switch>
      <Route path="/dashboard/call" component={SpeechRecordContainer} />
      <Route path="/dashboard/performance" component={() => <div></div>} />
      <Route path="/dashboard/employees" component={() => <div></div>} />
    </Switch>
    <div className="test-div"></div>
  </div>
)

export default DashboardMain;