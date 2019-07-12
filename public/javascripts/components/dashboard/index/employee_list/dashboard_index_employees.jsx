import React from 'react';

import EmployeeListItem from './employee_list_item.jsx';

class DashboardIndexEmployees extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const employees = this.props.employees;
     
    return (
      <div className="dashboard-index-employees-container dashboard-index-section container-shadow">
        <h1 className="dashboard-index-section-title">Your Team:</h1>
        <ul className="dashboard-index-employees-list scroll-list">
          {employees.map(employee => (
            <EmployeeListItem key={employee._id} employee={employee} />
          ))}
        </ul>
      </div>
    );
  }
}

export default DashboardIndexEmployees;