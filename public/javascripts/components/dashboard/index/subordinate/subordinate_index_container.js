import { connect } from 'react-redux';
import SubordinateIndex from './subordinate_index';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser: currentUser,
  tasks: currentUser.myTasks
});

export default connect(
  mapStateToProps,
  null
)(SubordinateIndex);