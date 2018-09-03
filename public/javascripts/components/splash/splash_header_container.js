import { connect } from 'react-redux';
import { login, logout } from '../../actions/employee_actions';
import SplashHeader from './splash_header';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: (token) => dispatch(logout(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashHeader);