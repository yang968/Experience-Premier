import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { COLOR, POSITIVITY_LABELS, SENTIMENT_LABELS } from "../../../chart/chart";
import { ENGINE_METHOD_DIGESTS } from 'constants';

class DashboardIndexStats extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      chartData1: {
        labels: POSITIVITY_LABELS,
        datasets: [{
           backgroundColor: COLOR
        }]
      },
      chartData2: {
        labels: SENTIMENT_LABELS,
        datasets: [{
          label: "Sentiment Analysis",
          backgroundColor: COLOR
        }],
      }
    };
  }

  componentWillMount() {
    if (this.props.stats.length > 0) {
      let count = this.props.stats[0].tasks;
      let stats = this.props.stats[0];
      let [neg, neu, pos] = [stats.negative, stats.neutral, stats.positive];
      let [s, j, a, f, d] = [stats.sadness, stats.joy, stats.anger, stats.fear, stats.disgust];
      let data = [s, j, a, f, d].map((el) => (el/count).toFixed(3));
      this.state.chartData1.datasets[0].data = [neg, neu, pos];
      this.state.chartData2.datasets[0].data = data;
    }
  }

  returnTitleText() {
    if (this.props.manger) {
      return <span>Your</span>;
    }
    return <span>Team</span>;
  }

	render() {
    if (this.props.stats.length === 0) {
      return <div className="dashboard-index-stats-container">
        <h1>You have no data to show :(</h1>
      </div>;
    } else {

		return <div className="dashboard-index-stats-container">
          <div className="dashboard-index-stats-graph-pie">
            <Pie data={this.state.chartData1} />
            <div className='stats-graph-title'>x
              <h6>{this.returnTitleText()} Cumulative Outcome </h6>
            </div>
          </div>
          <div className="dashboard-index-stats-graph-bar">
            <Bar data={this.state.chartData2} options={{ legend: false }} />
            <div className='stats-graph-title'>
              <h6>{this.returnTitleText()} Average Sentiment Analysis </h6>
            </div>
        </div>
      </div>;
    }
	}
}

export default DashboardIndexStats;