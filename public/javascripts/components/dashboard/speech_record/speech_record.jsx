import React from 'react';

class SpeechRecord extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      stream: false
    };

    this.transcript = "";
  }

  componentDidMount() {
    // this.recognition = new SpeechRecognition();
    // this.recognition.interimResults = true;
  }

  handleSubmit(e) {
    e.preventDefault();
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const texts = document.querySelector(".live-text");
    let p;
    if (this.state.stream) {
      this.setState({ stream: false });
      this.recognition.stop();
      this.recognition.removeEventListener("end", this.recognition.start);

      this.recognition = null;
      console.log(this.transcript);
      this.props.createTask({ 
        token: this.props.currentUser.token, 
        transcript: this.transcript
      });
      this.transcript = "";
      
      let children = Array.from(document.querySelectorAll(".live-text > p"));

      children.forEach(child => {
        child.parentNode.removeChild(child);
      })
    } else {
      this.setState({ stream: true });

      this.recognition = new SpeechRecognition();
      this.recognition.interimResults = true;
      this.transcript = "";

      this.recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')

        let p = document.createElement("p");
        p.textContent = transcript;

        if (e.results[0].isFinal) {
          this.transcript += (p.textContent + ". ");
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