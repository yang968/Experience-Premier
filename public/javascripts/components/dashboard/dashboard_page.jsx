import React from 'react';

import SpeechRecordContainer from './speech_record_container';
import DashboardSidebarContainer from './dashboard_sidebar_container';
import DashboardMain from './dashboard_main';

const DashboardPage = () => (
  <div className="dashboard-page-container">
    <DashBoardSidebarContainer />
    <DashboardMain />
  </div>
);

export default DashboardPage;