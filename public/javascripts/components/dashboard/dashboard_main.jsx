import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import DashboardIndex from "./index/dashboard_index";
import SpeechRecordContainer from "./speech_record/speech_record_container";
// import PerformancePage from './performance/performance_page';
// import EmployeesPageContainer from './employees/employees_page_container';

import { AuthRoute, ProtectedRoute } from "../../util/route_util";

const DashboardMain = () => (
  <div className="dashboard-main-container">
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardIndex} />
      <ProtectedRoute path="/dashboard/call" component={SpeechRecordContainer} />
      {/* <ProtectedRoute path="/dashboard/performance" component={PerformancePage} />
      <ProtectedRoute path="/dashboard/employees" component={EmployeesPageContainer} /> */}
    </Switch>
  </div>
);

export default DashboardMain;