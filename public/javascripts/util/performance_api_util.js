export const fetchTeamPerformance = (performanceData) => {
  let authToken = performanceData.token;
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = authToken;
};
