import React from "react";

import { withRouter } from 'react-router-dom';

import EmployeeInfo from './employee_info';
import EmployeeCallStats from './employee_call_stats';

class EmployeePage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.employeeId);
    console.log(this.props);
  }
  
  render() {
    // if (!this.props.history.location) {
    //   return null;
    // }
    return (
      <div className="employee-page-container">
        <EmployeeInfo />
        <EmployeeCallStats />
      </div>
    );
  }
};

export default withRouter(EmployeePage);
