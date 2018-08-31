import React from 'react';

class DashboardIndexStats extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="dashboard-index-stats-container">
        <canvas id='ownStats'></canvas>
      </div>
    );
  }
}

export default DashboardIndexStats;