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
				scales: { 
					xAxes: [{ 
						stacked: true,
						display: false, 
						gridLines: {display: false} }],
					yAxes: [{ 
						stacked: true,
						display: false, 
						gridLines: {display: false}
					}]},
			},
			datasets: [{ 
				label: "Sadness",
				backgroundColor: 'rgba(40, 122, 255, 0.72)',
				data: [1] 
			},{ 
				label: "Joy",
				backgroundColor: 'rgba(245, 250, 30, 0.72)',
				data: [5] 
			}, { 
				label: "Fear",
				backgroundColor: 'rgba(255, 40, 100, 0.72)',
				data: [2] 
			}]
		};
	}

	componentWillMount() {
		this.state.score = this.props.stats.results.sentiment.score;
		this.state.label = this.props.stats.results.sentiment.label;
		console.log(this.props.stats.results.emotion);
		let emo = this.props.stats.results.emotion;
		let emotions = [emo.sadness, emo.joy, emo.anger, emo.fear, emo.disgust];
	}

	render() {
			return <div>
					<div>
						<p>Label: {this.state.label}</p>
						<p>Score: {this.state.score}</p>
					</div>
					<HorizontalBar data={{ 
							labels: ['Sentiment Analysis'], 
							datasets: this.state.datasets }} 
						options={this.state.options} 
					/>
				</div>;
	}
}



export default CallPerformancePage;