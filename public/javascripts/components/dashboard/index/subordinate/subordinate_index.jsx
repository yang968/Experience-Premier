import React from 'react';
import dateFormat from 'dateformat';

import CallPerformancePage from "../../call_performance/call_performance_page";

class SubordinateIndex extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.managerTask) {
      this.state = { task: this.props.managerTask};
    } else {
      this.state = { task: null };
    }
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
      <ul key={i} className="call-history-item-list" onClick={(e) => this.handleClick(e, task)}>
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

  employeesRender(e) {
    e.preventDefault();
    this.props.triggerManager(false);
  }

  backToEmployees() {
    if (this.props.managerTask || this.props.currentUser.manager) {
      return (
        <button className="back-to-employees" onClick={(e) => this.employeesRender(e)}>Back to Employees</button>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
    <div id="subordinate-index">
        <div className="performance-data animated fadeInUp"> 
        {this.backToEmployees()}
          {this.renderGraph()}
        </div>
        <div className="dashboard-index-call-history-div">
          <h1 className="stats-graph-title">My Calls</h1>
          <ul className="dashboard-index-call-history-list">{this.displayTasks()}</ul>
        </div>
      </div>
    );       
  }
}

export default SubordinateIndex;