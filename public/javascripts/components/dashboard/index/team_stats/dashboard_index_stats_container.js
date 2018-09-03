import DashboardIndexStats from './dashboard_index_stats';
import { connect } from 'react-redux';

const mapStateToProps = ({ session: { currentUser } }) => {
  if (currentUser.manager) {
    return {stats: Object.values(currentUser.myPerformances),
    manager: currentUser.manager
    };
  } else {
  return {stats: Object.values(currentUser.myPerformances),
    manager: currentUser.manager
    };
  }
};

export default connect( mapStateToProps, null )(DashboardIndexStats);