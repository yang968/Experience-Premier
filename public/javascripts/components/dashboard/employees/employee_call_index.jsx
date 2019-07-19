import React from 'react';
import dateFormat from 'dateformat';

import CallPerformancePage from "../call_performance/call_performance_page";

class SubordinateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = props.tasks;
    this.state = { task: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, taskData) {
    e.preventDefault();
    this.setState({ task: taskData });
  }

  renderGraph() {
    if (this.state.task) {
      return <CallPerformancePage stats={this.state.task} />;
    } else {
      return <p>Select a call to display data.</p>
    }
  }

  displayTasks() {
    let tasks = this.props.tasks;
    if (tasks.length > 0) {
      return tasks.map((task, i) =>
        <ul key={i} className="call-history-item-list scroll-list-item call-history-list-item" onClick={(e) => this.handleClick(e, task)}>
          <div className="history-item-div">
            <li>{dateFormat(task.date)}</li>
            <li className="overall-score">Sentiment:  {`${(task.results.sentiment.score * 100).toFixed(2)}%`}</li>
          </div>
        </ul>
      );
    } else {
      return <p>You have not recorded a call yet!</p>;
    }
  }

  render() {
    let employee = this.props.employee;

    return (
      <div className="employee-call-index-container">
        <div className="performance-data dashboard-section container-shadow">
          {this.renderGraph()}
        </div>
        <div className="call-history-container dashboard-section list-container container-shadow">
          <h1 className="stats-graph-title">
            {employee.firstName}'s Calls
          </h1>
          <div className="scroll-list-wrapper">
            <ul className="call-history-list scroll-list">{this.displayTasks()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SubordinateIndex;