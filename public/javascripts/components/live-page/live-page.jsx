import React from 'react';

class LivePage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {text: ""}
  }

  handleSubmit(e) {
   e.preventDefault()
   
  }
  
  render () {
    return (
      <div className="live-page">
        <h1>LIVE PAGE</h1>
        <button id="#button"/>
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



 // e.preventDefault();

    // // fetching the token
    // fetch('/api/speech-to-text/token')
    //   .then(function (response) {
    //     return response.text();
    //   }).then(function (token) {

    //     var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
    //       token: token,
    //       objectMode: true,
    //       format: false,
    //       word_confidence: true
    //     });

    //     stream.on('error', function (err) {
    //       console.log(err);
    //     });

    //     // each result (sentence) gets it's own <span> because Watson will sometimes go back and change a word as it hears more context
    //     let curSentence = <span class="interim">&nbsp;</span>

    //     // a result is approximately equivalent to a sentence, and is the granularity that alternatives are selected on
    //     stream.on('data', function (msg) {

    //       if (msg.results) {
    //         msg.results.forEach(function (result) {
    //           // only final results include word confidence
    //           if (result.final) {
    //             var html = result.alternatives[0].word_confidence.map(function (pair) {
    //               // the word_confidence array includes a sub-array for wach word like so: ['word', 0.9]
    //               // the score is a range from 1 (100% confident) to 0 (not at all confident)
    //               // RGB color values go on a scale of 0-255 with 0,0,0 being black and 255,255,255 being white.
    //               // In this case, we want confident words to be 0 (black), and the least confident words to be 200 (light grey)
    //               var shade = 200 - Math.round(pair[1] * 200);
    //               return '<span style="color: rgb(' + shade + ',' + shade + ',' + shade + ')">' + pair[0] + '</span>';
    //             }).join(' ') + ' ';

    //             // let curSentence = <span class="interim">{html}</span>;

    //             let curSentence = <span class="final">{html}</span>;
    //             // if we have the final text for that sentence, start a new one
    //             // $curSentence = $('<span class="interim"/>').appendTo($live-feed);
    //           } else {
    //             // for interim results
    //             // $curSentence.html(result.alternatives[0].transcript);
    //           }
    //         });
    //       }

    //     });
    //   }
    // )