import axios from "axios";
import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

// if (process.env.No)

export const createUser = (user) => {
  let instance = axios.create({});
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  return instance.post("/api/users/register", formurlencoded(user))
}

// export const login = (user) => {
//   let instance = axios.create({});
//   instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
//   return instance.post("/api/users/login", formurlencoded(user))
// };

export const login = (user) => {
  return (
  fetch("/api/users/login", {
    method: "POST",
    mode: "cors",
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: formurlencoded(user), // body data type must match "Content-Type" header
    }).then((res) => res.json()).then((payload) => {return payload})
    )
  };


export const logout = (token) => {
  let instance = axios.create({});
  // instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = token;
  return instance.post("/api/users/logout")
}

export const getDashboard = (token) => {
  let instance = axios.create({});
  // instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  instance.defaults.headers.common[`Authorization`] = token;
  return instance.get("/api/users/dashboard");
}
export const fetchUser = (userId) => {
  let instance = axios.create({});
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
  return instance.get(`/api/users/${userId}`);
};