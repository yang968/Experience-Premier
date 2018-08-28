import * as taskUtil from '../util/task_api_util';

export const RECEIVE_TASK = "RECEIVE_TASK";

export const createTask = task => dispatch => (
  taskUtil.createTask(task).then(taskData => dispatch(receiveTask(taskData)))
);

const receiveTask = taskData => ({
  type: RECEIVE_TASK,
  task: taskData.data
});