import * as taskUtil from '../util/task_api_util';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const createTask = task => dispatch => (
  taskUtil.createTask(task).then(taskData => dispatch(receiveTask(taskData)))
);

export const fetchTask = task => dispatch => (
  taskUtil.fetchTask(task).then(taskData => dispatch(receiveTask(taskData)))
)

export const deleteTask = task => dispatch => (
  taskUtil.deleteTask(task).then(taskData => dispatch(removeTask(taskData)))
)

const receiveTask = taskData => ({
  type: RECEIVE_TASK,
  task: taskData.data
});

const removeTask = taskData => ({
  type: REMOVE_TASK,
  task: taskData.data
});