import {createTask} from '../../../actions/task_actions';
import {connect} from 'react-redux';
import SpeechRecord from './speech_record';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createTask: (task) => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeechRecord);