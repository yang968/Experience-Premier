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
  <ul>
    <li>{renderTaskDate(task.date)}</li>
    <li>Overall Score: {`${task.results.sentiment.score}`}</li>
  </ul>
  );

export default CallHistoryItem;