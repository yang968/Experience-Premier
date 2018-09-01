import React from 'react';

const renderTaskDate = (taskDate) => {
  const splitDate = taskDate.slice(0, 10)
  const month = `${splitDate.slice(5, 8)}`
  const day = `${splitDate.slice(8, 10)}${splitDate.slice(4, 5)}`
  const year = `${splitDate.slice(0, 4)}`
  const date = `${month}${day}${year}`
  return date
};

const CallHistoryItem = ({task}) => (
  <li>{renderTaskDate(task.date)}</li>
  );

export default CallHistoryItem;