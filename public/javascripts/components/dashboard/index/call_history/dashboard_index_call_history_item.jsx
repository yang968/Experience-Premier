import React from 'react';

const renderTaskDate = (taskDate) => {
  const splitTime = taskDate.slice(11, 16);
  const splitDate = taskDate.slice(0, 10);
  const month = `${splitDate.slice(5, 8)}`;
  const day = `${splitDate.slice(8, 10)}${splitDate.slice(4, 5)}`;
  const year = `${splitDate.slice(0, 4)}`;
  const date = `${month}${day}${year}`;
  return `${splitTime} ${date}`;
};

const CallHistoryItem = ({task}) => (
  <ul className="call-history-item-list">
  <div className="history-item-div">
    <li>{renderTaskDate(task.date)}</li>
    <li className="overall-score">Sentiment:  {`${(task.results.sentiment.score * 100).toFixed(2)}%`}</li>
    </div>
  </ul>
  );

export default CallHistoryItem;