import {fetchSpeechToken} from '../../actions/auth_actions';
import {createTask} from '../../actions/task_actions';
import {connect} from 'react-redux';
import TaskPage from './task';
import {startRecording, stopRecording} from '../../actions/record_button_actions';

const mapStateToProps = state => ({
  // speechToken: state.entities.speechToken
})


const mapDispatchToProps = dispatch => ({
  fetchSpeechToken: () => dispatch(fetchSpeechToken()),
  createTask: (task) => dispatch(createTask(task)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPage);