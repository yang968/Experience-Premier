import React from 'react';
import { HorizontalBar } from "react-chartjs-2";
import {
	SENTIMENT_COLOR,
	SENTIMENT_LABELS,
	CALL_PERFORMANCE_PAGE
} from "../../../chart/chart_constants";

class CallPerformancePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
        labels: SENTIMENT_LABELS,
        datasets: [{
        }]
			},
			options : CALL_PERFORMANCE_PAGE
		};
	}

	componentWillMount() {
		this.state.score = this.props.stats.results.sentiment.score;
		this.state.label = this.props.stats.results.sentiment.label;

		let emo = this.props.stats.results.emotion;
		let data = [emo.sadness, emo.joy, emo.anger, emo.fear, emo.disgust];
		let datasets = [];
		for (let i = 0; i < data.length; i++) {
			let obj = {};
			obj.label = SENTIMENT_LABELS[i];
			obj.backgroundColor = SENTIMENT_COLOR[i];
			obj.data = [data[i]];
			datasets.push(obj);
		}
		this.state.datasets = datasets;
	}

	render() {
			return <div>
					<div>
						<p>Label: {this.state.label}</p>
						<p>Score: {this.state.score}</p>
					</div>
					<HorizontalBar data={{ 
							labels: ['Sentiment Analysis'], 
							datasets: this.state.datasets}} 
						options={this.state.options} 
					/>
				</div>;
	}
}



export default CallPerformancePage;