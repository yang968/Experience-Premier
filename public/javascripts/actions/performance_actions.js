import * as performanceUtil from '../util/performance_api_util';
export const RECEIVE_PERFORMANCES = "RECEIVE_PERFORMANCES";

export const fetchPerformances = (performanceData) => dispatch => (
  performanceUtil.fetchPerformance(performanceData)
  .then(performances => dispatch(receivePerformance(performances)))
);

const receivePerformance = (performances) => ({
  type: RECEIVE_PERFORMANCES,
  performance
});