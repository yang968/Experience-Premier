import {RECEIVE_EMPLOYEE_ERRORS} from '../actions/employee_actions';
import { RECEIVE_TASK_ERRORS } from '../actions/task_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const ErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EMPLOYEE_ERRORS:
      return Object.values(action.errors.response.data)
    case RECEIVE_TASK_ERRORS:
      return Object.values(action.errors.response.data)
    case CLEAR_ERRORS:
      return [];
    default:
      return [];
  }
}

export default ErrorsReducer;