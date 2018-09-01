import DashboardIndexStats from './dashboard_index_stats';
import { connect } from 'react-redux';

const mapStateToProps = ({ session: { currentUser } }) => {
  if (currentUser.manager) {
    return {stats: Object.values(currentUser.myPerformances),
    manager: currentUser.manager
    };
  }
<<<<<<< HEAD
    return {stats: Object.values(currentUser.myPerformances)}
=======
  return {stats: Object.values(currentUser.myPerformances),
    manager: currentUser.manager
  };
>>>>>>> 3c4265682ed0f4c6b730a77173c29a79a4c5a225
};

export default connect( mapStateToProps, null )(DashboardIndexStats);