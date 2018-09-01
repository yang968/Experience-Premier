import DashboardIndexStats from './dashboard_index_stats';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  stats: Object.values(state.session.currentUser.myPerformances),
  manager: state.session.currentUser.manager
});

export default connect( mapStateToProps, null )(DashboardIndexStats);