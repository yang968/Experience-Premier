import React from 'react';

import CallHistoryItem from '../call_history/dashboard_index_call_history_item'


class SubordinateIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  displayTasks() {
    console.log(this.props)
    let tasks = this.props.tasks;
    if (tasks.length > 0) {
      return tasks.map((task) => <CallHistoryItem task={task} key={task._id} />)
    } else {
      <p>You have not recorded a call yet!</p>
    }
  }

  render() {
    return (
    <div className="subordinate-index">
        <h1>My Calls</h1>
        <ul className="dashboard-index-call-history-list">{this.displayTasks()}</ul>
    </div>
    ) 
  }
}

export default SubordinateIndex;