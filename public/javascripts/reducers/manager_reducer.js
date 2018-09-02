import { RECEIVE_MANAGER_TRIGGER } from '../actions/manager_actions';

const ManagerReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_MANAGER_TRIGGER:
      return action.selectedTask;
    default:
      return false;
  }
};

export default ManagerReducer;