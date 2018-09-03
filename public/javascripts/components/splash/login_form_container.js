
import { connect } from "react-redux";
import { login } from "../../actions/employee_actions";
import { clearErrors } from "../../actions/error_actions";

import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors,
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
