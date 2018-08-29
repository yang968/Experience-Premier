import {RECEIVE_EMPLOYEE_ERRORS} from '../actions/employee_actions';
import { RECEIVE_TASK_ERRORS } from '../actions/task_actions';

const ErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EMPLOYEE_ERRORS:
      return action.errors 
    case RECEIVE_TASK_ERRORS:
      return action.errors
    default: 
      return oldState;
  }
}

export default ErrorsReducer;