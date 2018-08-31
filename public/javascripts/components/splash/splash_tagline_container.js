import { connect } from 'react-redux';
import { login } from '../../actions/employee_actions';
import Tagline from './splash_tagline';

const mapDispatchToProps = (userData) => ({
  login: (userData) => dispatch(login(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(Tagline)