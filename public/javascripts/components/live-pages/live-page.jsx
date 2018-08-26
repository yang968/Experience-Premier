import React from 'react';

class LivePage extends React.Component {



  render () {
    return (
      <div className="live-page">
        <h1>LIVE PAGE</h1>
        <p 
          contentEditable="true"
          suppressContentEditableWarning="true"
          placeholder="Your text here">
        className="live-feed">
          paragraph
        </p>
      </div>
    )
  }
}

export default LivePage;