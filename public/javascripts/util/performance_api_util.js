// might be needed might not be needed

// export const fetchPerformance = (performanceData) => {
//   let authToken = performanceData.token;
//   let instance = axios.create({});
//   instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//   instance.defaults.headers.common[`Authorization`] = authToken;
//   // return instance.get(`http://localhost:5000/api/tasks/${performanceData.employeeId}`);
// };

export const fetchTeamPerformance = (performanceData) => {
  let authToken = performanceData.token;
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = authToken;
  // return instance.get(`http://localhost:5000/api/tasks/${performanceData.taskId}`);
};
