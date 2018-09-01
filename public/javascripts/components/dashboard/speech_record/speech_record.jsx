import React from 'react';

class SpeechRecord extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      stream: false
    };
  }

  componentDidMount() {
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.stream) {
      this.setState({ stream: false });
      this.recognition.stop();
      this.recognition.removeEventListener("end", this.recognition.start);
    } else {
      this.setState({ stream: true });
      
      let p = document.createElement('p');
      const texts = document.querySelector('.live-text');
      texts.appendChild(p);

      this.recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')

        p.textContent = transcript;
        if (e.results[0].isFinal) {
          // console.log(transcript);

          p = document.createElement('p');
          texts.appendChild(p);
        }
      });

      this.recognition.start();
      this.recognition.addEventListener("end", this.recognition.start);
    }
  }

  render() {
    let buttonText = (this.state.stream) ? "Stop" : "Record";
    return (
      <div className="speech-record-container">
        <div className="speech-record-box">

          <h1>Record Conversation</h1>
          <div className="live-text">
          
          </div>
          <button className="record-button" onClick={this.handleSubmit}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default SpeechRecord;