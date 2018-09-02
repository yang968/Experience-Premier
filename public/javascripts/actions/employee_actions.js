import * as userUtil from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_EMPLOYEE_ERRORS = "RECEIVE_EMPLOYEE_ERRORS";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_DASHBOARD = "RECEIVE_DASHBOARD";

export const createUser = user => dispatch => (
  userUtil.createUser(user)
  .then(payload => dispatch(receiveUser(payload)), 
  errors => dispatch(receiveErrors(errors)))
);

export const fetchUser = userId => dispatch => (
  userUtil.fetchUser(userId)
  .then(payload => dispatch(receiveUser(payload)),
  errors => dispatch(receiveErrors(errors)))
);

export const login = loginData => dispatch => (
  userUtil.login(loginData)
  .then(payload => dispatch(receiveCurrentUser(payload)), 
  errors => dispatch(receiveErrors(errors)))
);

export const logout = token => dispatch => (
  userUtil.logout(token)
  .then(res => dispatch(logoutUser(res)))
);

export const getDashboard = token => dispatch => (
  userUtil.getDashboard(token)
  .then(res => dispatch(receiveDashboard(res)))
);

const receiveDashboard = payload => ({
  type: RECEIVE_DASHBOARD,
  payload: payload.data
})

const logoutUser = (res) => ({
  type: LOGOUT_USER,
  res
})

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload: payload.data
});

const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload: payload.data
})

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_EMPLOYEE_ERRORS,
    errors
  })
};
