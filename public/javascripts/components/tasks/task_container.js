import {fetchSpeechToken} from '../../actions/auth_actions';
import {createTask} from '../../actions/task_actions';
import {connect} from 'react-redux';
import TaskPage from './task';

const mapStateToProps = state => ({
  token: state.session.currentUser.token
})


const mapDispatchToProps = dispatch => ({
  fetchSpeechToken: () => dispatch(fetchSpeechToken()),
  createTask: (task) => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPage);