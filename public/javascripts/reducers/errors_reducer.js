import {RECEIVE_EMPLOYEE_ERRORS} from '../actions/employee_actions';

const ErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EMPLOYEE_ERRORS:
      return action.errors 
    default: 
      return oldState;
  }
}

export default ErrorsReducer;