import React from 'react';
import CallHistoryItem from './dashboard_index_call_history_item';

class DashboardIndexCallHistory extends React.Component {

  constructor(props) {
    super(props)
    this.displayTasks = this.displayTasks.bind(this);
  }

  displayTasks() {
    let tasks = this.props.tasks;
    if (tasks.length > 0) {
      return tasks.map((task) => <CallHistoryItem task={task} key={task._id} /> )
    } else {
      <p>You have not recorded a call yet!</p>
    }
  }

  render() {
    return (
      <div className="dashboard-index-something-container">
        <h1>My Tasks</h1>
        {this.displayTasks()}
      </div>
    )
  }
};

export default DashboardIndexCallHistory;