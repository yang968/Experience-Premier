import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import DashboardIndexContainer from "./index/dashboard_index_container";
import SpeechRecordContainer from "./speech_record/speech_record_container";
import EmployeePageContainer from './employees/employee_page_container';

import { AuthRoute, ProtectedRoute } from "../../util/route_util";

const DashboardMain = () => (
  <div className="dashboard-main-container">
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardIndexContainer} />
      <ProtectedRoute path="/dashboard/call" component={SpeechRecordContainer} />
      <ProtectedRoute path="/dashboard/employee/:employeeId" component={EmployeePageContainer} /> 
    </Switch>
  </div>
);

export default DashboardMain;