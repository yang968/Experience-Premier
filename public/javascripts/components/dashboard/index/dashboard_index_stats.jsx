import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { COLOR } from '../../../chart/chart';

class DashboardIndexStats extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      chartData1: {
        labels: ["Negative", "Neutral", "Positive"],
        datasets: [{
           backgroundColor: COLOR
        }]
      },
      chartData2: {
        labels: ["Sadness", "Joy", "Anger", "Fear", "Disgust"],
        datasets: [{
          label: "Sentiment Analysis",
          backgroundColor: COLOR
        }],
      }
    };
  }

  componentWillMount() {
    let stats = this.props.stats[0];
    let [neg, neu, pos] = [stats.negative, stats.neutral, stats.positive];
    let [s, j, a, f, d] = [stats.sadness, stats.joy, stats.anger, stats.fear, stats.disgust];
    let data = [s, j, a, f, d].map((el) => el.toFixed(3));
    this.state.chartData1.datasets[0].data = [neg, neu, pos];
    this.state.chartData2.datasets[0].data = data;
  }

	render() {
		return (
			<div className="dashboard-index-stats-container">
        <div className='dashboard-index-stats-graph'>
          <Pie data={this.state.chartData1}
          />
        </div>
        <div className='dashboard-index-stats-graph'>
          <Bar 
            data={this.state.chartData2}
            options={{legend: false}}/>
        </div>
			</div>
		);
	}
}

export default DashboardIndexStats;