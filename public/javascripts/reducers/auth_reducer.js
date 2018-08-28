import merge from 'lodash/merge';
import RECEIVE_SPEECH_TOKEN from '../actions/auth_actions';

const AuthReducer = (oldState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SPEECH_TOKEN:
      return merge({}, oldState, {speechToken: action.token}); 
    default:
      return oldState;
  }
}

export default AuthReducer;