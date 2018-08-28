import React from 'react';
import ReactDOM from 'react-dom';

import Tagline from './splash_tagline';
import DashboardExpo from './dashboard_expo';
import DataExpo from './data_expo';

import LoginFormContainer from './login_form_container';

const modalDivRef = React.createRef();

class SplashBody extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.modalDiv = ReactDOM.findDOMNode(modalDivRef.current);
  }

  render() {
    const SessionFormWithRef = React.forwardRef((props, ref) => (
      <SessionForm modalDiv={this.modalDiv} ref={ref} />
    ));

    return (
      <div className="splash-body">
        <Tagline />
        <DashboardExpo />
        <DataExpo />
        <div ref={modalDivRef} className="modalDiv animated" id="modalDiv"></div>
      </div>
    );
  }
}

export default SplashBody;
