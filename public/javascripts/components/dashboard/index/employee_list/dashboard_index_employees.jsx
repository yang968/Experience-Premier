import React from 'react';

import EmployeeListItem from './employee_list_item.jsx';

class DashboardIndexEmployees extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const employees = this.props.employees;
     
    return (
      <div className="dashboard-index-employees-container dashboard-section list-container container-shadow">
        <h1 className="dashboard-section-title">Your Team:</h1>
        <div className="scroll-list-wrapper">
          <ul className="dashboard-index-employees-list scroll-list">
            {employees.map(employee => (
              <EmployeeListItem key={employee._id} employee={employee} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DashboardIndexEmployees;