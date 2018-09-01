import EmployeesPage from './employees_page';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  employees: session.currentUser.subordinates
});

export default connect(
  mapStateToProps,
  null
)(EmployeesPage);