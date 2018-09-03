import React from "react";

import { withRouter } from 'react-router-dom';

import EmployeeInfo from './employee_info';
import EmployeeCallIndex from './employee_call_index';

class EmployeePage extends React.Component {
  constructor(props) {
    super(props);
    this.imgUrl = this.imgUrl || this.fetchProfileImg();
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.employeeId);
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
    let date = new Date();
    let tasks = 0;
    let imgUrl = this.imgUrl;
    this.props.tasks.forEach(task => {
      // console.log(task)
      if ((parseInt(task.date.slice(5,7))) === (date.getMonth() + 1)) tasks++;
    })

    return (
      <div className="employee-page-container">
        <EmployeeInfo 
          employee={this.props.employee}
          callCount={tasks}
          imgUrl={imgUrl}
        />
        <EmployeeCallIndex 
          tasks={this.props.tasks}
          employee={this.props.employee}
        />
      </div>
    );
  }
};

export default withRouter(EmployeePage);
