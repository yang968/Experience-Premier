import React from "react";
import axios from "axios";

import { withRouter } from 'react-router-dom';

import EmployeeInfo from './employee_info';
import EmployeeCallStats from './employee_call_stats';

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.employeeId);
    console.log(this.fetchProfileImg());
  }

  fetchProfileImg() {
    let genders = ["men", "women"];
    let imgNum = Math.ceil(Math.random() * 49);
    let gender = genders[Math.round(Math.random())];
    return (
      `https://randomuser.me/api/portraits/${gender}/${imgNum}.jpg`
    )
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="employee-page-container">
        <EmployeeInfo 
          employee={this.props.employee} 
          imgUrl={this.fetchProfileImg()}
        />
        <EmployeeCallStats tasks={this.props.tasks}/>
      </div>
    );
  }
};

export default withRouter(EmployeePage);
