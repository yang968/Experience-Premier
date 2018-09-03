import axios from "axios";
import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

// if (process.env.No)

export const createUser = (user) => {
  let instance = axios.create({});
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  return instance.post("/api/users/register", formurlencoded(user))
}

export const login = (user) => {
  let instance = axios.create({});
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
  return instance.post("/api/users/login", formurlencoded(user))
};

export const logout = (token) => {
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = token;
  return instance.post("/api/users/logout")
}

export const getDashboard = (token) => {
  let instance = axios.create({});
  instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = token;
  return instance.get("/api/users/dashboard");
}
export const fetchUser = (userId) => {
  let instance = axios.create({});
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
  return instance.get(`/api/users/${userId}`);
};