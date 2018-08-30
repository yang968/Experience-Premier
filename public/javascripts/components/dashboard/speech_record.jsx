import React from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class SpeechRecord extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {stream: false}
  }

  componentDidMount() {
    document.querySelector(".record-button").onclick = this.handleSubmit;
  }

  handleSubmit(e) {
    e.preventDefault();

    // If the stream is on, switch the button to make it stop.
    if (this.stream) {
      this.stream.stop.bind(this.stream);
      this.stream.stop();
      this.stream = null;
      const token = this.props.currentUser.token;
      const transcript = document.querySelector(".live-text").innerText;
      const task = {token: token, transcript: transcript};
      this.props.createTask(task);
      return;
    }
    // Fetching the token from our back-end
      this.props
        .fetchSpeechToken()
        .then(response => {
          return response.token;
        })
        .then(token => {
          /* Grab token and use Watson's node module to stream from the computer 
             mic and send that sound file to Watson's api for analysis. */
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
          /* If we receive a "data" response then we need to key into the data 
             and display it by setting it to our state. */
          stream.on("data", data => {
            /* Watson sends multiple results per sentence, so we only want to 
            display the "final" result. Otherwise we may have the same sentence 
            displayed 1-3 times. */
            const final = data.results[0].final;
            const text = data.results[0].alternatives[0].transcript;
            if (final) {
              let dataNode = document.createTextNode(text);
              document.querySelector(".live-text").appendChild(dataNode);
            }
          });
          this.stream = stream
          /* Select the start button and give it an onclick function to stop the 
          stream. Reset the start button to begin recording again. */
          // document.querySelector(".record-button").onclick = stream.stop.bind(stream);
        });
  }

  render() {
    return (
      <div className="speech-record-container">
        <div className="speech-record-box">

          <h1>Record Conversation</h1>
          <div className="live-text">
          
          </div>
          <button className="record-button">
            Record / Stop
          </button>
        </div>
      </div>
    );
  }
}

export default SpeechRecord;