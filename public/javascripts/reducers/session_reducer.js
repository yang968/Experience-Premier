import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER} from '../actions/user_actions';

const _nullSession = {
  currentUser: null
}

const SessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user });
    default:
      return oldState;
  }
}

export default SessionReducer;