import React from 'react';

import EmployeeListItem from './employee_list_item.jsx';

class DashboardIndexEmployees extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const employees = this.props.employees;
     
    return (
      <div className="dashboard-index-employees-container container-shadow">
        <h1>Your Team:</h1>
        <ul className="dashboard-index-employees-list">
          {employees.map(employee => (
            <EmployeeListItem 
              key={employee._id} 
              employee={employee} 
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default DashboardIndexEmployees;