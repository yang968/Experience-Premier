import {RECEIVE_TASK} from '../actions/task_actions';
import merge from 'lodash/merge'

const TaskReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_TASK:
    console.log(action)
      return merge({}, oldState, {[action.task._id]: action.task});
    default: 
      return oldState;
  }
}

export default TaskReducer;