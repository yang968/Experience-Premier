import formurlencoded from 'form-urlencoded/dist/form-urlencoded';

// create/register option not yet available on the front end. Leaving code here in case we decide to use it.

// export const createUser = (user) => {
//   return (
//     fetch("/api/users/register", {
//       method: "POST",
//       mode: "cors",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       redirect: "follow",
//       referrer: "no-referrer"
//     }).then((res) => res.json()).then((response) => {return response})
//   );
// };

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
  );
};

export const logout = (token) => {
  return (
    fetch("/api/users/logout", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Authorization": token
      },
      redirect: "follow",
      referrer: "no-referrer",
    }).then((res) => res.json()).then((response) => { return response })
  );
};

export const getDashboard = (token) => {
  return(
    fetch("/api/users/dashboard", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Authorization": token
      },
      redirect: "follow",
      referrer: "no-referrer",
    }).then((res) => res.json()).then((response) => { return response })
  );
};

export const fetchUser = (userId) => {
  return (
    fetch(`/api/users/${userId}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrer: "no-referrer",
    }).then((res) => res.json()).then((response) => { return response })
  );
};