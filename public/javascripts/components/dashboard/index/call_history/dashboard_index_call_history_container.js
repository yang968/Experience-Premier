import DashboardIndexCallHistory from './dashboard_index_call_history';
import { connect } from 'react-redux';
import { triggerManager } from '../../../../actions/manager_actions';

const mapStateToProps = ({ session }) => ({
  tasks: session.currentUser.myTasks
});

const mapDispatchToProps = dispatch => ({
  triggerManager: (task) => dispatch(triggerManager(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardIndexCallHistory);