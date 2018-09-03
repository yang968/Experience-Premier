import DashboardIndexEmployees from './dashboard_index_employees';
import  { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  employees: session.currentUser.subordinates
});

export default connect(
  mapStateToProps,
  null
)(DashboardIndexEmployees);