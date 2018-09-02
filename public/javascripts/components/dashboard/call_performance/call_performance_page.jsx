import React from 'react';
import { Pie, Bar, HorizontalBar } from "react-chartjs-2";
import {
	POSITIVITY_COLOR,
	SENTIMENT_COLOR,
	POSITIVITY_LABELS,
	SENTIMENT_LABELS
} from "../../../chart/chart_constants";

class CallPerformancePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			label: null,
			score: null,

			chartData: {
        labels: SENTIMENT_LABELS,
        datasets: [{
          backgroundColor: SENTIMENT_COLOR
        }]
			},
			options : { 
				legend: { display: false },
				scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }]}
			},
			datasets: [{ 
				label: "Sadness",
				backgroundColor: 'yellow',
				data: [1] 
			},{ 
				label: "Joy",
				backgroundColor: 'red',
				data: [2] 
			}]
		};
	}

	componentWillMount() {
		this.state.score = this.props.stats.results.sentiment.score;
		this.state.label = this.props.stats.results.sentiment.label;
	}

	render() {
			return <div>
					<div>
						<p>Label: {this.state.label}</p>
						<p>Score: {this.state.score}</p>
					</div>
					<HorizontalBar data={{ labels: ['Sentiment Analysis'], datasets: this.state.datasets}} 
						options={this.state.options} 
					/>
				</div>;
	}
}



export default CallPerformancePage;