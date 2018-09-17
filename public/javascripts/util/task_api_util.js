import axios from 'axios';
import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

export const createTask = (taskData) => {
  let authToken = taskData.token
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = authToken;
  return instance.post("/api/tasks/", formurlencoded(taskData));
}

export const fetchTask = (taskData) => {
  let authToken = taskData.token;
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = authToken;
  return instance.get(`/api/tasks/${taskData._id}`);
}

export const deleteTask = (taskData) => {
  let authToken = taskData.token;
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = authToken;
  return instance.delete(`/api/tasks/${taskData._id}`);
}
