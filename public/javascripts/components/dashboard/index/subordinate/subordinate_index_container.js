import { connect } from 'react-redux';
import SubordinateIndex from './subordinate_index';
import { triggerManager } from "../../../../actions/manager_actions"

const mapStateToProps = ({ session: { currentUser }, entities }) => ({
  currentUser: currentUser,
  tasks: currentUser.myTasks,
  managerTask: entities.managerTask
});

const mapDispatchToProps = dispatch => ({
  triggerManager: (task) => dispatch(triggerManager(task))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubordinateIndex);