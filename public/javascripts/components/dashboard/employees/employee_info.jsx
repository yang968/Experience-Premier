import React from 'react';
const dateFormat = require('dateformat');

const EmployeeInfo = (props) => {
  console.log(props);
  const employee = props.employee;
  const imgUrl = props.imgUrl;
  const employeeName = `${employee.firstName} ${employee.lastName}`;
  let { email, date } = props.employee;
  date = dateFormat(date, "longDate");

  return (
    <div className="employee-info-container">
      <img
        src={imgUrl}
        alt="employee-profile-pic"
        className="employee-profile-pic"
      />
      <section>
        <h1>{employeeName}</h1>
        <h2>{email}</h2>
        <h3>Hire date: {date}</h3>
      </section>
    </div>
  );
}

export default EmployeeInfo;