import axios from 'axios';
import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

export const createTask = (taskData) => {
  let authToken = taskData.token
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = authToken;
  return instance.post("/api/tasks/", formurlencoded(taskData));
}

// export const fetchTask = (taskData) => {
//   let authToken = taskData.token;
//   let instance = axios.create({});
//   instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//   instance.defaults.headers.common[`Authorization`] = authToken;
//   return instance.get(`/api/tasks/${taskData._id}`);
// }

export const fetchTask = (taskData) => {
  let authToken = taskData.token;
  return (
    fetch(`/api/users/${taskData._id}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": authToken
      },
      redirect: "follow",
      referrer: "no-referrer",
    }).then((res) => res.json()).then((response) => { return response })
  );
}

export const deleteTask = (taskData) => {
  let authToken = taskData.token;
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = authToken;
  return instance.delete(`/api/tasks/${taskData._id}`);
}
