import React from 'react';

class LivePage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {'text': ""}
  }

  handleSubmit(e) {
    e.preventDefault();
    // fetching the token
    console.log("were in")
    fetch('/api/speech-to-text/token')
      .then(function (response) {
        return response.text();
      }).then(function (token) {
        var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
          token: token,
          objectMode: true,
          format: false,
          word_confidence: true
        });
        stream.on('error', function (err) {
          console.log(err);
        });
        // a result is approximately equivalent to a sentence, and is the granularity that alternatives are selected on
        stream.on('data', function (msg) {
          console.log(msg)
          if (msg.results) {
            msg.results.forEach(function (result) {
              // only final results include word confidence
              if (result.final) {
                var html = result.alternatives[0].word_confidence.map(function (pair) {
                  // the word_confidence array includes a sub-array for wach word like so: ['word', 0.9]
                  // the score is a range from 1 (100% confident) to 0 (not at all confident)
                  // RGB color values go on a scale of 0-255 with 0,0,0 being black and 255,255,255 being white.
                  // In this case, we want confident words to be 0 (black), and the least confident words to be 200 (light grey)
                  var shade = 200 - Math.round(pair[1] * 200);
                  return '<span style="color: rgb(' + shade + ',' + shade + ',' + shade + ')">' + pair[0] + '</span>';
                }).join(' ') + ' ';
                // if we have the final text for that sentence, start a new one
                  this.setState({ 'text': html });
              } else {
                // for interim results
                this.setState({'text': result.alternatives[0].transcript});
              }
            });
          }
        });
    
    }
  )}
  
  render () {
    return (
      <div className="live-page">
        <h1>LIVE PAGE</h1>
        <button onClick={this.handleSubmit} id="#button"/>
        <input 
          value={this.state.text}
          type="text"
          contentEditable="true"
          suppressContentEditableWarning="true"
          placeholder="Your text here"
          id="live-feed" />
      </div>
    );
  }
}

export default LivePage;
