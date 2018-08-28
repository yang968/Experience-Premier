import axios from 'axios';
import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

export const createTask = (taskData) => {
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  return instance.post("http://localhost:5000/api/tasks/", formurlencoded(taskData));
}