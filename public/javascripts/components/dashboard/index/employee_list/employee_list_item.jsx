import React from 'react';
import { 
  withRouter, 
} from 'react-router-dom';

class EmployeeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const employeeId = this.props.employee._id;
    this.props.history.push({
      pathname: `/dashboard/employee/${employeeId}`,
      state: { 
        employeeId: employeeId
      }
    });
  }

  render() {
    let employee = this.props.employee;
    return (
      <li
        className="employee-list-item animated fadeInUp"
        onClick={this.handleClick}
      >
        {employee.firstName}
        &nbsp;
        {employee.lastName}
      </li>
    );
  }
}


export default withRouter(EmployeeListItem);