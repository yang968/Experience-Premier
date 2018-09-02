export const RECEIVE_MANAGER_TRIGGER = "RECEIVE_MANAGER_TRIGGER";

export const triggerManager = (task) => ({
  type: RECEIVE_MANAGER_TRIGGER,
  selectedTask: task
})