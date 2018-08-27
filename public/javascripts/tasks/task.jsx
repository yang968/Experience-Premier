import React from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { text: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    // fetching the token from our back-end
    console.log("were in");
    fetch("http://localhost:5000/api/speech-to-text/token")
      .then(response => {
        return response.text();
      })
      .then(token => {
        // grab token and use Watson's node module to stream from the computer mic and send that sound file to 
        // Watson's api for analysis.
        var stream = recognizeMic({
          token: token,
          objectMode: true,
          format: false,
          word_confidence: true
        });
        // We aren't doing anything with our errors yet.
        stream.on("error", err => {
          console.log(err);
        });
        // If we receive a "data" response then we need to key into the data and display it by
        // setting it to our state.
        stream.on("data", data => {
          this.setState({
            text: data.results[0].alternatives[0].transcript
          });
        });
        // Vanilla DOM to select the stop button and give it an onclick function to stop the stream.
        document.querySelector(".stop-button").onclick = stream.stop.bind(stream);
      });
  }

  render() {
    return (
      <div className="live-page">
        <h1>LIVE PAGE</h1>
        <button onClick={this.handleSubmit} className="start-button">
          Start
        </button>
        <button className="stop-button">Stop</button>
        <p
          contentEditable="true"
          suppressContentEditableWarning="true"
          placeholder="Speech will generate here"
          id="live-feed"
        >
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default TaskPage;