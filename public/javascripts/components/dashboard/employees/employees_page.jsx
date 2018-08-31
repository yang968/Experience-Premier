import React from "react";

import EmployeeIndexItem from './employee_index_item';

class EmployeesPage extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const employees = this.props.employees;

    return (
      <div className="employees-page-container">
        <h1>EMPLOYEES</h1>
        <ul className="employees-page-index">
          {employees.map(employee => (
            <EmployeeIndexItem
              key={employee._id}
              employee={employee}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default EmployeesPage;
