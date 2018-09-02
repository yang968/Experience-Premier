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

	dataSetup() {
		console.log(this.props.stats);
		this.state.score = this.props.stats.results.sentiment.score.toFixed(2);
		this.state.label = this.props.stats.results.sentiment.label;
		console.log(this.props.stats);
		let emo = this.props.stats.results.emotion;
		let data = [emo.sadness, emo.joy, emo.anger, emo.fear, emo.disgust];
		let total = data.reduce(function(a,b){return a + b});
		let datasets = [];
		for (let i = 0; i < data.length; i++) {
			let obj = {};
			obj.label = SENTIMENT_LABELS[i];
			obj.backgroundColor = SENTIMENT_COLOR[i];
			obj.data = [(data[i] / total * 100).toFixed(2)];
			datasets.push(obj);
		}
		this.state.datasets = datasets;
	}

	render() {
			this.dataSetup();
			return <div className='performance-page'>
					<div className='performance-page-label'>
						<p>Label: {this.state.label} Score: {this.state.score}</p>
					</div>
					<div className='performance-page-chart'>
						<HorizontalBar data={{ 
								labels: ['Sentiment Analysis'], 
								datasets: this.state.datasets}} 
							options={this.state.options} 
						/>
					</div>
				</div>;
	}
}



export default CallPerformancePage;