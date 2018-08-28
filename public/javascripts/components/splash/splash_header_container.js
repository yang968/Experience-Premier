import { connect } from 'react-redux';

// Auth functionality not yet working 
// import { login, logout } from '../../actions/session_actions';

import SplashHeader from './splash_header';

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   login: user => dispatch(login(user)),
//   logout: () => dispatch(logout())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SplashHeader);

export default SplashHeader;