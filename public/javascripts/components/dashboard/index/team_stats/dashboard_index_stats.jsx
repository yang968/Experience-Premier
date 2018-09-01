import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
<<<<<<< HEAD:public/javascripts/components/dashboard/index/dashboard_index_stats.jsx
import { 
  POSITIVITY_COLOR, 
  SENTIMENT_COLOR, 
  POSITIVITY_LABELS, 
  SENTIMENT_LABELS 
} from "../../../chart/chart_constants";
=======
import { COLOR, POSITIVITY_LABELS, SENTIMENT_LABELS } from "../../../../chart/chart_constants";
>>>>>>> 5783054dd3c025b8791fb2eecb5a8f1d4369388e:public/javascripts/components/dashboard/index/team_stats/dashboard_index_stats.jsx
import { ENGINE_METHOD_DIGESTS } from 'constants';

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
          backgroundColor: SENTIMENT_COLOR
        }],
      }
    };
  }

  componentWillMount() {
    if (this.props.stats.length > 0) {
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
  }

  returnTitleText() {
    if (this.props.manger) {
      return <span>Your</span>;
    }
    return <span>Team</span>;
  }

	render() {
    if (this.props.stats === 0) {
      return <div className="dashboard-index-stats-container">
        <h1>You have no data to show :(</h1>
      </div>;
    } else {
		return <div className="dashboard-index-stats-container">
          <div className="dashboard-index-stats-graph-pie">
            <Pie data={this.state.chartData1} options={{legend: {position: 'right'}}}/>
            <div className='stats-graph-title'>
              <h6>{this.returnTitleText()} Cumulative Outcome </h6>
            </div>
          </div>
          <div className="dashboard-index-stats-graph-bar">
            <Bar data={this.state.chartData2} options={{legend: false}} />
            <div className='stats-graph-title'>
              <h6>{this.returnTitleText()} Average Sentiment Analysis </h6>
            </div>
        </div>
      </div>;
    }
	}
}

export default DashboardIndexStats;