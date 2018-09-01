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
    this.props.history.push(
      `/dashboard/employee/${employeeId}`, this.props);
  }

  render() {
    let employee = this.props.employee;
    return (
      <li 
        className="employee-list-item"
        onClick={this.handleClick}
      >
        {employee.firstName}&nbsp;{employee.lastName}
      </li>
    );
  }
}


export default withRouter(EmployeeListItem);