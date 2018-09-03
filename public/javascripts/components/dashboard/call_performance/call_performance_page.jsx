import React from 'react';
import { HorizontalBar } from "react-chartjs-2";
import {
	SENTIMENT_COLOR,
	SENTIMENT_LABELS,
	CALL_PERFORMANCE_PAGE1,
	CALL_PERFORMANCE_PAGE2
} from "../../../chart/chart_constants";

class CallPerformancePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			horizontalStacked : {
				chartData: { labels: SENTIMENT_LABELS },
				options : CALL_PERFORMANCE_PAGE1
			},
			keywords: {
				labels: ["a", "b"],
				chartData: [
					{ label: "Sadness", data: [] },
					{ label: "Joy", data: [] },
					{ label: "Anger", data: [] },
					{ label: "Fear", data: [] },
					{ label: "Disgust", data: [] },
				],
				options: CALL_PERFORMANCE_PAGE2				
			},
			relevance: {
				chartData: { labels: [] }
			}
		};
	}

	dataSetup() {
		this.state.score = this.props.stats.results.sentiment.score.toFixed(2);
		this.state.label = this.props.stats.results.sentiment.label;
		let emo = this.props.stats.results.emotion;
		let data = [emo.sadness, emo.joy, emo.anger, emo.fear, emo.disgust];
		let total = data.reduce(function(a,b){return a + b;});
		let datasets = [];
		for (let i = 0; i < data.length; i++) {
			let obj = {};
			obj.label = SENTIMENT_LABELS[i];
			obj.backgroundColor = SENTIMENT_COLOR[i];
			obj.data = [(data[i] / total * 100).toFixed(2)];
			datasets.push(obj);
		}
		this.state.horizontalStacked.chartData.datasets = datasets;
	}

	relevanceSetup() {
		let datasets = [];
		let kw = this.props.stats.results.keywords;
		this.state.relevance.chartData.labels = [];
		for (let i = 0; i < kw.length; i++) {
			let obj = {};
			this.state.relevance.chartData.labels.push(kw[i].text);
			obj.label = kw[i].text;
			obj.backgroundColor = `rgba(40, 122, 255,` + kw[i].relevance + `)`,
			obj.data = [(kw[i].relevance * 100).toFixed(3)];
			datasets.push(obj);
		}
		this.state.relevance.chartData.datasets = datasets;
	}

	keywordSentimentSetup() {
		let kw = this.props.stats.results.keywords;
		this.state.keywords.labels = [];
		for (let i = 0; i < 5; i++) {
			this.state.keywords.chartData[i].data = [];
			for (let j = 0; j < kw.length; j++) {
				if (j > 2) {break;}
				if (i === 0) {this.state.keywords.labels.push(kw[j].text);}
				let k = String(this.state.keywords.chartData[i].label.toLowerCase());
				if (kw[j].emotion === undefined) {continue;}
				this.state.keywords.chartData[i].data.push(kw[j].emotion[k]);
			}
			this.state.keywords.chartData[i].backgroundColor = SENTIMENT_COLOR[i];
		}
	}

	colorLabel() {
		if (this.state.label === 'negative') {
			return <span className="negative">Negative. </span>;
		} 
		return <span className="positive">Positive. </span>;
	}

	colorScore() {
		if (this.state.score < 0) {
			return <span className="negative"> {this.state.score} </span>;
		}
		return <span className="positive"> +{this.state.score} </span>;
	}

	render() {
			this.dataSetup();
			this.keywordSentimentSetup();
			this.relevanceSetup();
			return <div className='performance-page animated slideInLeft'>
					<div className='performance-page-label'>
						<div className="performance-ls">
							<pre> Label: {this.colorLabel()}</pre>
						</div>
						<div className="performance-ls2">
							<pre>Score: {this.colorScore()} </pre>
						</div>
					</div>
					<div className="performance-page-charts">
						<div className='performance-page-chart'>
							<h6>Overall Sentiment Score</h6>
							<HorizontalBar data={{ 
									labels: ['Sentiment Analysis'], 
								datasets: this.state.horizontalStacked.chartData.datasets}} 
								options={this.state.horizontalStacked.options} 
							/>
						</div>
						<div className='performance-page-chart'>
								<h6>Keywords and Relevance</h6>
							<HorizontalBar data={{
								datasets: this.state.relevance.chartData.datasets
							}}
								options={this.state.keywords.options}
							/>
						</div>
						<div className='performance-page-chart-kw'>
							<h6>Sentiment Analysis of Each Keyword</h6>
							<HorizontalBar data={{
								labels: this.state.keywords.labels,
								datasets: this.state.keywords.chartData
							}}
								options={this.state.keywords.options}
							/>
						</div>
				</div>
			</div>;
	}
}



export default CallPerformancePage;