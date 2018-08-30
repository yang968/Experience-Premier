import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER} from '../actions/employee_actions';

const EmployeeReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.currentUser.subordinates) return action.payload.currentUser.subordinates;
      return oldState;
    default:
      return oldState;
  }
}

export default EmployeeReducer;