import axios from "axios";
import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

export const createUser = (user) => {
  let instance = axios.create({});
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  return instance.post("/api/users/register", formurlencoded(user))
}

export const login = (user) => {
  return (
  fetch("/api/users/login", {
    method: "POST",
    mode: "cors",
    credentials: "same-origin", 
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: formurlencoded(user),
    }).then((res) => res.json()).then((payload) => {return payload})
  )};


// export const logout = (token) => {
//   let instance = axios.create({});
//   instance.defaults.headers.common[`Authorization`] = token;
//   return instance.post("/api/users/logout")
// }
export const logout = (token) => {
return (
  fetch("/api/users/logout", {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-+urlencoded",
      "Authorization": token
    },
    redirect: "follow",
    referrer: "no-referrer",
  }).then((res) => res.json()).then((response) => { return response })
)};

export const getDashboard = (token) => {
  let instance = axios.create({});
  instance.defaults.headers.common[`Authorization`] = token;
  return instance.get("/api/users/dashboard");
}
export const fetchUser = (userId) => {
  let instance = axios.create({});
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
  return instance.get(`/api/users/${userId}`);
};