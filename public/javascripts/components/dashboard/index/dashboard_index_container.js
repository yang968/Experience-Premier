import { connect } from 'react-redux';
import DashboardIndex from './dashboard_index'

const mapStateToProps = ({ session }) => ({
  employees: session.currentUser.subordinates
});

export default connect(
  mapStateToProps,
  null
)(DashboardIndex);