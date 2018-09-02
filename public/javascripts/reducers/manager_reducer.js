import { RECEIVE_MANAGER_TRIGGER } from '../actions/manager_actions';

const ManagerReducer = (oldState = false, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_MANAGER_TRIGGER:
      return action.selectedTask;
    default:
      return oldState;
  }
};

export default ManagerReducer;