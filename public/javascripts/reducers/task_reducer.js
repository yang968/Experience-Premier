import {RECEIVE_TASK, REMOVE_TASK} from '../actions/task_actions';
import {
  RECEIVE_CURRENT_USER, 
  RECEIVE_USER,
  RECEIVE_DASHBOARD} from '../actions/employee_actions';
import merge from 'lodash/merge'

const TaskReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASK:
      return merge({}, oldState, {[action.task._id]: action.task});
    case REMOVE_TASK:
      let newState = merge({}, oldState);
      delete newState[action.task._id]
      return newState;
    case RECEIVE_CURRENT_USER || RECEIVE_DASHBOARD:
      return action.payload.currentUser.myTasks;
    case RECEIVE_USER: 
      if (action.payload.tasks) return action.payload.tasks;
      return oldState;
    default: 
      return oldState;
  }
}

export default TaskReducer;