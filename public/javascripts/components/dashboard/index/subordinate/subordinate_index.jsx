import React from 'react';

import CallHistoryItem from '../call_history/dashboard_index_call_history_item'


class SubordinateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: null }
    this.handleClick = this.handleClick.bind(this);
  }

  renderTaskDate (taskDate) {
    const splitTime = taskDate.slice(11, 16);
    const splitDate = taskDate.slice(0, 10);
    const month = `${splitDate.slice(5, 8)}`;
    const day = `${splitDate.slice(8, 10)}${splitDate.slice(4, 5)}`;
    const year = `${splitDate.slice(0, 4)}`;
    const date = `${month}${day}${year}`;
    return `${splitTime} ${date}`;
  };

  handleClick(e, taskData) {
    e.preventDefault();
    console.log(taskData)
    this.setState({ task: taskData })
  }

  displayTasks() {
    let tasks = this.props.tasks;
    if (tasks.length > 0) {
      return tasks.map((task, i) => 
      <ul key={i} className="call-history-item-list" onClick={(e) => this.handleClick(e, task)}>
        <div className="history-item-div">
          <li>{this.renderTaskDate(task.date)}</li>
          <li className="overall-score">Sentiment:  {`${(task.results.sentiment.score * 100).toFixed(2)}%`}</li>
        </div>
      </ul>
      );
    } else {
     return <p>You have not recorded a call yet!</p>
    }
  }



  render() {
    return (
    <div className="subordinate-index">
        <div className="performance-data"></div>
        <ul className="dashboard-index-call-history-list">
          <h1>My Calls</h1>
          {this.displayTasks()}
        </ul>
    </div>
    ) 
  }
}

export default SubordinateIndex;