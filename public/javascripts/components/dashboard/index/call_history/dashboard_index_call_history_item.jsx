import React from 'react';

const dateFormat = require('dateformat');

const CallHistoryItem = ({task}) => (
  <ul className="call-history-item-list">
  <div className="history-item-div">
    <li>{dateFormat(task.date)}</li>
    <li className="overall-score">Sentiment:  {`${(task.results.sentiment.score * 100).toFixed(2)}%`}</li>
    </div>
  </ul>
  );

export default CallHistoryItem;