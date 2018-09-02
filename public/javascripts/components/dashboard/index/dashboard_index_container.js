import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index';
import { getDashboard } from '../../../actions/employee_actions';

const mapStateToProps = ({ session, entities }) => ({
  token: session.currentUser.token,
  employees: session.currentUser.subordinates,
  managerTask: entities.managerTask
});

const mapDispatchToProps = dispatch => ({
  getDashboard: (token) => dispatch(getDashboard(token))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardIndex);