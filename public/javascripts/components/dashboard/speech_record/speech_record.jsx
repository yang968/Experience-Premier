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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();

    let SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (this.state.stream) {
      this.setState({ stream: false });
      this.recognition.stop();
      this.recognition.removeEventListener("end", this.recognition.start);

      this.recognition = null;

      this.props.createTask({
        token: this.props.currentUser.token,
        transcript: this.transcript
      });
      this.transcript = "";

      let children = Array.from(document.querySelectorAll(".live-text > p"));
      children.forEach(child => {
        child.parentNode.removeChild(child);
      });
    } else {
      this.setState({ stream: true });

      this.recognition = new SpeechRecognition();
      this.recognition.interimResults = true;

      const texts = document.querySelector(".live-text");
      let p = document.createElement("p");
      texts.appendChild(p);

      this.recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join("");

        p.textContent = transcript;
        if (e.results[0].isFinal) {
          this.transcript += p.textContent + ". ";

          p = document.createElement("p");
          texts.appendChild(p);
        }
      });

      this.recognition.start();
      this.recognition.addEventListener("end", this.recognition.start);
    }
  }

  render() {
    let buttonText = this.state.stream ? "Stop" : "Record";
    return (
      <div className="speech-record-container animated zoomIn">
        <div className="speech-record-box">
          <h1>Record Conversation</h1>
          <div className="live-text" />
          <ul>
            {this.props.errors && this.props.errors.map((error, idx) => (<li className="task-fail animated fadeInDown" key={idx}>{error}</li>))}
          </ul>
          <button className="record-button" onClick={this.handleSubmit}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default SpeechRecord;