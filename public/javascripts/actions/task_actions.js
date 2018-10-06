import * as taskUtil from '../util/task_api_util';
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";

export const createTask = task => dispatch => (
  taskUtil.createTask(task)
  .then(taskData => dispatch(receiveTask(taskData)),
   errors => dispatch(receiveErrors(errors)))
);

export const fetchTask = task => dispatch => (
  taskUtil.fetchTask(task)
  .then(taskData => dispatch(receiveTask(taskData)),
   errors => dispatch(receiveErrors(errors)))
);

export const deleteTask = task => dispatch => (
  taskUtil.deleteTask(task)
  .then(taskData => dispatch(removeTask(taskData)),
   errors => dispatch(receiveErrors(errors)))
);

const receiveTask = taskData => ({
  type: RECEIVE_TASK,
  task: taskData
});

const removeTask = taskData => ({
  type: REMOVE_TASK,
  task: taskData
});

const receiveErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
})