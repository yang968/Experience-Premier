import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER} from '../actions/employee_actions';

const _nullSession = {
  currentUser: null
}

const SessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    console.log(action.payload)
      return merge({}, oldState, { currentUser: action.payload.user });
    default:
      return oldState;
  }
}

export default SessionReducer;