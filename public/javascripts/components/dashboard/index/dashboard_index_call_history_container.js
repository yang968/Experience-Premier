import DashboardIndexCallHistory from './dashboard_index_call_history';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  tasks: session.currentUser.myTasks
});

export default connect(
  mapStateToProps,
  null 
)(DashboardIndexCallHistory);