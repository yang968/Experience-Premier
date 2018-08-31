import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import DashboardIndex from "./index/dashboard_index";
import SpeechRecordContainer from "./speech_record/speech_record_container";
<<<<<<< HEAD
// import PerformancePage from './performance/performance_page';
// import EmployeesPage from './employees/employees_page';
=======
import PerformancePage from './performance/performance_page';
import EmployeesPageContainer from './employees/employees_page_container';
>>>>>>> d818db100be770a6af7194cbce7262a203c276d6

import { AuthRoute, ProtectedRoute } from "../../util/route_util";

const DashboardMain = () => (
  <div className="dashboard-main-container">
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardIndex} />
      <ProtectedRoute path="/dashboard/call" component={SpeechRecordContainer} />
<<<<<<< HEAD
      {/* <ProtectedRoute path="/dashboard/performance" component={() => <div></div>} /> */}
      {/* <ProtectedRoute path="/dashboard/employees" component={() => <div></div>} /> */}
=======
      <ProtectedRoute path="/dashboard/performance" component={PerformancePage} />
      <ProtectedRoute path="/dashboard/employees" component={EmployeesPageContainer} />
>>>>>>> d818db100be770a6af7194cbce7262a203c276d6
    </Switch>
  </div>
);

export default DashboardMain;