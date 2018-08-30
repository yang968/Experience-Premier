import * as performanceUtil from '../util/performance_api_util';
export const RECEIVE_PERFORMANCE = "RECEIVE_PERFORMANCE";
export const RECEIVE_PERFORMANCES = "RECEIVE_PERFORMANCES";

export const fetchPerformance = (performanceData) => dispatch => (
  performanceUtil.fetchPerformance(performanceData)
  .then(performance => dispatch(receivePerformance(performance)))
);

export const fetchTeamPerformances = (performanceData) => dispatch => (
  performanceUtil.fetchTeamPerformances(performanceData)
  .then(performances => dispatch(receivePerformances(performances)))
)

const receivePerformance = (performance) => ({
  type: RECEIVE_PERFORMANCE,
  performance
});

const receivePerformances = (performances) => ({
  type: RECEIVE_PERFORMANCES,
  performances
});