import React from 'react';

class EmployeeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const employeeId = this.props.employee._id;
    this.props.history.push(`/dashboard/employees/${employeeId}`);
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

export default EmployeeIndexItem;