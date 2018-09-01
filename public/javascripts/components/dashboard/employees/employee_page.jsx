import React from "react";

import { withRouter } from 'react-router-dom';

class EmployeePage extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(this.props.match.params);
  }

  render() {

    return (
      <div className="employee-page-container">
        <h1>Name here</h1>
      </div>
    );
  }
};

export default withRouter(EmployeePage);
