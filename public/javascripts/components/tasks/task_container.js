import {fetchSpeechToken} from '../../actions/auth_actions'
import {connect} from 'react-redux';
import TaskPage from './task';

const mapStateToProps = (state) => ({
  blue: "blue"
});

const mapDispatchToProps = dispatch => ({
  fetchSpeechToken: () => dispatch(fetchSpeechToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPage);