import EmployeePage from './employee_page';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => {
  return ({
    employee: session.currentUser.subordinates
  })
};

export default connect(
  mapStateToProps,
  null
)(EmployeePage);