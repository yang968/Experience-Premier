import React from 'react';
import dateFormat from 'dateformat';

const handleClick = (e, task, triggerManager) => {
  console.log(triggerManager)
  e.preventDefault();
  triggerManager(task);
}

const CallHistoryItem = ({ task, triggerManager }) => {
  return (
  <ul className="call-history-item-list" onClick={(e) => handleClick(e, task, triggerManager)}>
    <div className="history-item-div animated slideInUp">
      <li>{dateFormat(task.date)}</li>
      <li className="overall-score">
        Sentiment: {`${(task.results.sentiment.score * 100).toFixed(2)}%`}
      </li>
    </div>
  </ul>
  )
};

export default CallHistoryItem;