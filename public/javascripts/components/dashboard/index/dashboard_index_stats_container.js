import DashboardIndexStats from './dashboard_index_stats';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  stats: Object.values(session.currentUser.myPerformances)
});

export default connect( mapStateToProps, null )(DashboardIndexStats);