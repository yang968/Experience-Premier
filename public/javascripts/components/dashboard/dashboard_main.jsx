import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import DashboardIndexContainer from "./index/dashboard_index_container";
import SpeechRecordContainer from "./speech_record/speech_record_container";
// import PerformancePage from './performance/performance_page';
// import EmployeesPage from './employees/employees_page';

import { AuthRoute, ProtectedRoute } from "../../util/route_util";

const DashboardMain = () => (
  <div className="dashboard-main-container">
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardIndexContainer} />
      <ProtectedRoute path="/dashboard/call" component={SpeechRecordContainer} />
      {/* <ProtectedRoute path="/dashboard/performance" component={() => <div></div>} /> */}
      {/* <ProtectedRoute path="/dashboard/employees" component={() => <div></div>} /> */}
    </Switch>
  </div>
);

export default DashboardMain;