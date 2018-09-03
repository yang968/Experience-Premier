import {RECEIVE_TASK, REMOVE_TASK} from '../actions/task_actions';
import {
  RECEIVE_CURRENT_USER, 
  RECEIVE_USER,
  RECEIVE_DASHBOARD} from '../actions/employee_actions';
import merge from 'lodash/merge'

const TaskReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_TASK:
      let newState = oldState;
      return newState.concat(action.task);
    case REMOVE_TASK:
      let i = 0;
      for (i; i < oldState.length; i++) {
        if (oldState[i]._id === action.task._id) break;
      }
      newState = oldState.splice(i, 1);
      // delete newState[action.task._id]
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_DASHBOARD:
      return [];
    case RECEIVE_USER: 
      if (action.payload.tasks) return action.payload.tasks;
      return oldState;
    default: 
      return oldState;
  }
}

export default TaskReducer;