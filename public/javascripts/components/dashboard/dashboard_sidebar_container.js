import { connect } from 'react-redux';

import DashboardSidebar from './dashboard_sidebar';
import { logout } from '../../actions/employee_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardSidebar);