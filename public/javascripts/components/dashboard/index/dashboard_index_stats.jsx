import React from 'react';
import { Pie } from 'react-chartjs-2';

class DashboardIndexStats extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      label: ["Best", "Excellent", "Good", "Bad", "Horrible"],
      data: [0.5, 0.12, 0.5, 0.4, 0.8, 0.72]
    };
  }

	render() {
    console.log(this.props);
		return (
			<div className="dashboard-index-stats-container">
        <div className='dashboard-index-stats-graph'>
          <Pie data={{
                labels: this.state.label,
                datasets: [{
                  label: 'ABC',
                  data: this.state.data
                }]}}
          />
        </div>
        <div className='dashboard-index-stats-graph'>
          <Pie data={{
            labels: this.state.label,
            datasets: [{
              label: 'ABC',
              data: this.state.data
            }]
          }}
          />
        </div>
			</div>
		);
	}
}

export default DashboardIndexStats;