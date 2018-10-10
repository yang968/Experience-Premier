import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

// export const createTask = (taskData) => {
//   let authToken = taskData.token
//   let instance = axios.create({});
//   instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//   instance.defaults.headers.common[`Authorization`] = authToken;
//   return instance.post("/api/tasks/", formurlencoded(taskData));
// }

export const createTask = (taskData) => {
  let authToken = taskData.token;
  return (
    fetch("/api/tasks/", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": authToken
      },
      body: formurlencoded(taskData),
      redirect: "follow",
      referrer: "no-referrer"
    }).then((res) => res.json()).then((response) => {return response})
  );
};

// We are currently not using fetchTask anywhere since all data is being sent up with the currentUser and on
// getPerformances. Leaving the code here in case we ever need to implement fetchTask. Same thing with deleteTask.

// export const fetchTask = (taskData) => {
//   let authToken = taskData.token;
//   return (
//     fetch(`/api/tasks/${taskData._id}`, {
//       method: "GET",
//       mode: "cors",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Authorization": authToken
//       },
//       redirect: "follow",
//       referrer: "no-referrer",
//     }).then((res) => res.json()).then((response) => { return response })
//   );
// }

// export const deleteTask = (taskData) => {
//   let authToken = taskData.token;
//   return (
//     fetch(`/api/tasks/${taskData._id}`, {
//       method: "DELETE",
//       mode: "cors",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Authorization": authToken
//       },
//       redirect: "follow",
//       referrer: "no-referrer",
//     }).then((res) => res.json()).then((response) => { return response })
//   );
// }
