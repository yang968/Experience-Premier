import React from 'react';
import { TASK_SUBMITTED } from '../../../reducers/errors_reducer';

class TextAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      transcript: ""
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  updateTranscript(e) {
    this.setState({transcript: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    console.log(this.state.transcript)
    this.props.createTask({
      token: this.props.currentUser.token,
      transcript: this.state.transcript
    });

  };

  render() {
    let errors = null;
    if (this.props.errors && this.props.errors[0] === TASK_SUBMITTED) {
      errors = <li className="task-success animated fadeInDown">
          {this.props.errors[0]}
        </li>;
    } else if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (<li className="task-fail animated fadeInDown" key={idx}>{error}</li>));
    }
    return (
      <div className="speech-record-container animated zoomIn">
        <div className="speech-record-box">
          <h1>Submit Text for Analysis</h1> 
            <textarea
            className="live-text" 
            type="text" 
            placeholder="Your text here"
            onChange={(e) => this.updateTranscript(e)}
          ></textarea>
          <ul>
            {errors}
          </ul>
          <button className="record-button animated slideInUp" onClick={this.handleSubmit}>
            Submit Text
          </button>
          <p className="text-description">Here you can submit text for data analysis. Examples include an email you have drafted
            or notes for a presentation you have prepared.
          </p>
        </div>
      </div>
    );
  }
}

export default TextAnalysis;