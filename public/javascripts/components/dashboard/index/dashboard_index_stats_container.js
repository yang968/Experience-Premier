import DashboardIndexStats from './dashboard_index_stats';
import { connect } from 'react-redux';

const mapStateToProps = ({ session: { currentUser } }) => {
  if (currentUser.manager) {
    return {stats: Object.values(currentUser.myPerformances)}
  }
    return {stats: Object.values(currentUser.myPerformances)}
};

export default connect( mapStateToProps, null )(DashboardIndexStats);