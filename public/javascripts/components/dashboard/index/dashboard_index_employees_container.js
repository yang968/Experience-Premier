import DashboardIndexEmployees from './dashboard_index_employees';
import  { connect } from 'react-redux';

const mapStateToProps = ({ entities }) => ({
  employees: entities.employees
});

export default connect(
  mapStateToProps,
  null
)(DashboardIndexEmployees);