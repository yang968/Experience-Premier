import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import DashboardIndex from "./index/dashboard_index";
import SpeechRecordContainer from "./speech_record/speech_record_container";
import PerformancePage from './performance/performance_page';
import EmployeesPage from './employees/employees_page';

const DashboardMain = () => (
  <div className="dashboard-main-container">
    <Switch>
      <Route exact path="/dashboard" component={DashboardIndex} />
      <Route path="/dashboard/call" component={SpeechRecordContainer} />
      <Route path="/dashboard/performance" component={PerformancePage} />
      <Route path="/dashboard/employees" component={EmployeesPage} />
    </Switch>
  </div>
);

export default DashboardMain;