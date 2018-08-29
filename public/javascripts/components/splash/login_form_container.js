
import { connect } from "react-redux";
// import { login } from "../../actions/employee_actions"

import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  // processForm: user => dispatch(login(user))
  // clearFormErrors: () => dispatch(clearFormErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
