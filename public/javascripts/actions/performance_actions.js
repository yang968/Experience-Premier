import * as performanceUtil from '../util/performance_api_util';
export const RECEIVE_PERFORMANCE = "RECEIVE_PERFORMANCE";

export const fetchPerformance = (performanceData) => dispatch => (
  performanceUtil.fetchPerformance(performanceData)
  .then(performance => dispatch(receivePerformance(performance)))
);

const receivePerformance = (performance) => ({
  type: RECEIVE_PERFORMANCE,
  performance
});