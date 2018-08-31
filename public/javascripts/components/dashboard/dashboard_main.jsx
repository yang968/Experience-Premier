import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import DashboardIndex from "./index/dashboard_index";
import SpeechRecordContainer from "./speech_record/speech_record_container";

const DashboardMain = () => (
  <div className="dashboard-main-container">
    <Switch>
      <Route exact path="/dashboard" component={DashboardIndex} />
      <Route path="/dashboard/call" component={SpeechRecordContainer} />
      <Route path="/dashboard/performance" component={() => <div></div>} />
      <Route path="/dashboard/employees" component={() => <div></div>} />
    </Switch>
  </div>
)

export default DashboardMain;