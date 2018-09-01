import RECEIVE_PERFORMANCES from '../actions/performance_actions';
// import RECEIVE_CURRENT_USER from '../actions/employee_actions';

const PerformanceReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_PERFORMANCES:
      return action.payload.performances;
    default:
      return oldState 
  }
}

export default PerformanceReducer;