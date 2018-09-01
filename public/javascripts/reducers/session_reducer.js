import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, LOGOUT_USER, RECEIVE_DASHBOARD} from '../actions/employee_actions';

const _nullSession = {
  currentUser: null
}

const SessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER || RECEIVE_DASHBOARD:
      return merge({}, oldState, { currentUser: action.payload.currentUser });
    case LOGOUT_USER:
      return _nullSession;
    default:
      return oldState;
  }
}

export default SessionReducer;