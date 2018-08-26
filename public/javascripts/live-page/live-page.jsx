import React from 'react';

class LivePage extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return <div className="live-page">
        <h1>This is the live page</h1>
        <p className="live-text" contentEditable="true" suppressContentEditableWarning="true">
          hello
        </p>
      </div>;
  }
}

export default LivePage;