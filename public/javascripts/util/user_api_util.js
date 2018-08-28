import axios from "axios";

export const createUser = (user) =>(
  axios({
    method: 'POST',
    url: "http://localhost:5000/api/users/register",
    data: user,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
);

export const login = (user) => (
  axios({
    method: 'POST',
    url: "http://localhost:5000/api/users/login",
    data: user,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
);