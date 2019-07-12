import React from 'react';
import { Pie, Bar, Polar, HorizontalBar } from 'react-chartjs-2';
import {
	POSITIVITY_COLOR,
	SENTIMENT_COLOR,
	POSITIVITY_LABELS,
	SENTIMENT_LABELS,
	CALL_PERFORMANCE_PAGE
} from "../../../../chart/chart_constants";

class DashboardIndexStats extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      chartData1: {
        labels: POSITIVITY_LABELS,
        datasets: [{
          backgroundColor: POSITIVITY_COLOR
        }]
      },
      chartData2: {
        labels: SENTIMENT_LABELS,
        datasets: [{
          label: "Sentiment Analysis",
          backgroundColor: SENTIMENT_COLOR,
        }],
      }
    };
  }

  getData() {
    let [neg, neu, pos, s, j, a, f, d] = [0, 0, 0, 0, 0, 0, 0, 0];
    let count = 0;
    let stats = this.props.stats;
    this.props.stats.forEach((stat) => {count += stat.tasks;});
    stats.forEach((stat) => {
      neg += stat.negative; neu += stat.neutral;
      pos += stat.positive; s += stat.sadness;
      j += stat.joy; a += stat.anger;
      f += stat.fear; d += stat.disgust;
    });
    let data = [s, j, a, f, d].map((el) => (el/count).toFixed(3));
    this.state.chartData1.datasets[0].data = [neg, neu, pos];
    this.state.chartData2.datasets[0].data = data;
  }

  returnUserPronoun() {
    if (this.props.manager) {
      return <span>Team</span>;
    } else {
    return <span>Your</span>;
    }
  }
	render() {
    if (this.props.stats.length === 0) {
      return <div className="dashboard-index-stats-container">
        <h1>You have no data to show :(</h1>
      </div>;
    } else {
    this.getData();
		return <div className="dashboard-index-stats-container">
      <div className="dashboard-index-stats-graph-pie dashboard-index-section container-shadow">
            <div className="stats-graph-title">
              <h6>{this.returnUserPronoun()} Cumulative Performance </h6>
            </div>
            <div className="piechart">
              <Pie data={this.state.chartData1} options={{legend: {position: 'right'}}}/>
            </div>
          </div>
      <div className="dashboard-index-stats-graph-bar dashboard-index-section container-shadow">
            <h6 className="stats-graph-title">{this.returnUserPronoun()} Average Sentiment Analysis </h6>
            <div className="top-right">
              {/* <div className='stats-graph-title'>
                <h6> Bar Graph </h6>
              </div> */}
              <Bar data={this.state.chartData2} options={{ legend: false }} />
              {/* <div className='stats-graph-title'>
                <h6> Polar Area Chart </h6>
              </div> */}
              <Polar data={this.state.chartData2} options={{ legend: { position: 'right' } }}/>
            </div>
         </div>
      </div>;
    }
	}
}

export default DashboardIndexStats;