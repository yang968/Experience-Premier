import {RECEIVE_TASK, REMOVE_TASK} from '../actions/task_actions';
import merge from 'lodash/merge'

const TaskReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASK:
      return merge({}, oldState, {[action.task._id]: action.task});
    case REMOVE_TASK:
      let newState = merge({}, oldState);
      delete newState[action.task._id]
      return newState;
    default: 
      return oldState;
  }
}

export default TaskReducer;